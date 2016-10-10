/* Author: Jan Czizikow | Author URL: http://janczizikow.com */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
} + function($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
    }
}(jQuery); + function($) {
    'use strict';
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }
    Dropdown.VERSION = '3.3.7'

    function getParent($this) {
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        var $parent = selector && $(selector)
        return $parent && $parent.length ? $parent : $this.parent()
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function() {
            var $this = $(this)
            var $parent = getParent($this)
            var relatedTarget = {
                relatedTarget: this
            }
            if (!$parent.hasClass('open')) return
            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return
            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented()) return
            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
        })
    }
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)
        if ($this.is('.disabled, :disabled')) return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        clearMenus()
        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus)
            }
            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented()) return
            $this.trigger('focus').attr('aria-expanded', 'true')
            $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget))
        }
        return !1
    }
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return
        var $this = $(this)
        e.preventDefault()
        e.stopPropagation()
        if ($this.is('.disabled, :disabled')) return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }
        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('.dropdown-menu' + desc)
        if (!$items.length) return
        var index = $items.index(e.target)
        if (e.which == 38 && index > 0) index--
            if (e.which == 40 && index < $items.length - 1) index++
                if (!~index) index = 0
        $items.eq(index).trigger('focus')
    }

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')
            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }
    var old = $.fn.dropdown
    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }
    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
        e.stopPropagation()
    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)
}(jQuery); + function($) {
    'use strict';
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)
        this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))
        this.$element = $(element)
        this.affixed = null
        this.unpin = null
        this.pinnedOffset = null
        this.checkPosition()
    }
    Affix.VERSION = '3.3.7'
    Affix.RESET = 'affix affix-top affix-bottom'
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }
    Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var targetHeight = this.$target.height()
        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : !1
        if (this.affixed == 'bottom') {
            if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? !1 : 'bottom'
            return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? !1 : 'bottom'
        }
        var initializing = this.affixed == null
        var colliderTop = initializing ? scrollTop : position.top
        var colliderHeight = initializing ? targetHeight : height
        if (offsetTop != null && scrollTop <= offsetTop) return 'top'
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'
        return !1
    }
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return (this.pinnedOffset = position.top - scrollTop)
    }
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(':visible')) return
        var height = this.$element.height()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        var scrollHeight = Math.max($(document).height(), $(document.body).height())
        if (typeof offset != 'object') offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)
        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)
        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css('top', '')
            var affixType = 'affix' + (affix ? '-' + affix : '')
            var e = $.Event(affixType + '.bs.affix')
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            this.affixed = affix
            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
        }
        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            })
        }
    }

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option
            if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }
    var old = $.fn.affix
    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix
    $.fn.affix.noConflict = function() {
        $.fn.affix = old
        return this
    }
    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this)
            var data = $spy.data()
            data.offset = data.offset || {}
            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
            if (data.offsetTop != null) data.offset.top = data.offsetTop
            Plugin.call($spy, data)
        })
    })
}(jQuery); + function($) {
    'use strict';
    var Collapse = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]')
        this.transitioning = null
        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }
        if (this.options.toggle) this.toggle()
    }
    Collapse.VERSION = '3.3.7'
    Collapse.TRANSITION_DURATION = 350
    Collapse.DEFAULTS = {
        toggle: !0
    }
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in')) return
        var activesData
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')
        if (actives && actives.length) {
            activesData = actives.data('bs.collapse')
            if (activesData && activesData.transitioning) return
        }
        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return
        if (actives && actives.length) {
            Plugin.call(actives, 'hide')
            activesData || actives.data('bs.collapse', null)
        }
        var dimension = this.dimension()
        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', !0)
        this.$trigger.removeClass('collapsed').attr('aria-expanded', !0)
        this.transitioning = 1
        var complete = function() {
            this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
            this.transitioning = 0
            this.$element.trigger('shown.bs.collapse')
        }
        if (!$.support.transition) return complete.call(this)
        var scrollSize = $.camelCase(['scroll', dimension].join('-'))
        this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    }
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in')) return
        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return
        var dimension = this.dimension()
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight
        this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1)
        this.$trigger.addClass('collapsed').attr('aria-expanded', !1)
        this.transitioning = 1
        var complete = function() {
            this.transitioning = 0
            this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
        }
        if (!$.support.transition) return complete.call(this)
        this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    }
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }
    Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
            var $element = $(element)
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
        }, this)).end()
    }
    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass('in')
        $element.attr('aria-expanded', isOpen)
        $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen)
    }

    function getTargetFromTrigger($trigger) {
        var href
        var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
        return $(target)
    }

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = !1
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }
    var old = $.fn.collapse
    $.fn.collapse = Plugin
    $.fn.collapse.Constructor = Collapse
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old
        return this
    }
    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
        var $this = $(this)
        if (!$this.attr('data-target')) e.preventDefault()
        var $target = getTargetFromTrigger($this)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()
        Plugin.call($target, option)
    })
}(jQuery); + function($) {
    'use strict';

    function ScrollSpy(element, options) {
        this.$body = $(document.body)
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target || '') + ' .nav li > a'
        this.offsets = []
        this.targets = []
        this.activeTarget = null
        this.scrollHeight = 0
        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
        this.refresh()
        this.process()
    }
    ScrollSpy.VERSION = '3.3.7'
    ScrollSpy.DEFAULTS = {
        offset: 10
    }
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ScrollSpy.prototype.refresh = function() {
        var that = this
        var offsetMethod = 'offset'
        var offsetBase = 0
        this.offsets = []
        this.targets = []
        this.scrollHeight = this.getScrollHeight()
        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position'
            offsetBase = this.$scrollElement.scrollTop()
        }
        this.$body.find(this.selector).map(function() {
            var $el = $(this)
            var href = $el.data('target') || $el.attr('href')
            var $href = /^#./.test(href) && $(href)
            return ($href && $href.length && $href.is(':visible') && [
                [$href[offsetMethod]().top + offsetBase, href]
            ]) || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            that.offsets.push(this[0])
            that.targets.push(this[1])
        })
    }
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i
        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }
        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null
            return this.clear()
        }
        for (i = offsets.length; i--;) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i])
        }
    }
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target
        this.clear()
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]'
        var active = $(selector).parents('li').addClass('active')
        if (active.parent('.dropdown-menu').length) {
            active = active.closest('li.dropdown').addClass('active')
        }
        active.trigger('activate.bs.scrollspy')
    }
    ScrollSpy.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active')
    }

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option
            if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }
    var old = $.fn.scrollspy
    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old
        return this
    }
    $(window).on('load.bs.scrollspy.data-api', function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this)
            Plugin.call($spy, $spy.data())
        })
    })
}(jQuery); + function($) {
    'use strict';

    function transitionEnd() {
        var el = document.createElement('bootstrap')
        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }
        return !1
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = !1
        var $el = this
        $(this).one('bsTransitionEnd', function() {
            called = !0
        })
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }
    $(function() {
        $.support.transition = transitionEnd()
        if (!$.support.transition) return
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })
}(jQuery);
$(window).scroll(function() {
    if ($(".navbar").offset().top > 60) {
        $(".navbar-fixed-top").addClass("top-nav-collapse")
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse")
    }
});

var a1 = $('a.prev-project')[0],
    a2 = $('a.next-project')[0];

$(document).keydown(function(e) {
    if (e.which == 37) {
        alert('Arrow back pressed');
        $('a.prev-project').trigger('click');
    }
    else if (e.which == 39) {
    		alert('Arrow next pressed');
    		$('a.next-project').trigger('click');
    }
});
$(document).ready(function() {
    $('.navbar-brand').on('click', function() {
        if ($('.nav li:eq(0)').hasClass('active')) {
            $('html,body').animate({
                scrollTop: 0
            }, 750, 'easeInOutQuad')
        }
    });
    $('.name').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 750, 'easeInOutQuad')
    });
    $('#arrow-back')
        .mouseenter(function() {
            $('.prev-project').animate({
                 'left': '33%'
            }, 'slow');
        })
        .mouseleave(function() {
            $('.prev-project').animate({
                'left': '35%'
            }, 500);
    });
    
    $('figure').hover(function() {
        $(this).find('.caption').fadeIn(250)
    }, function() {
        $(this).find('.caption').fadeOut(200)
    });
    $('.img-project').addClass('loaded-img');
    $('.img-about').css({
        'opacity': '0'
    }).animate({
        opacity: 1.0,
    }, 950, 'easeInOutQuad');
    $('.about-p').css('opacity', '0').animate({
        opacity: 1.0,
    }, 750, 'easeInOutQuad')
});
$(function() {
    $('#wrapper').on('click', '#trigger', function() {
        $('#sidebar').addClass('open');
        $('#sidebar-filter').fadeIn(750, function() {
            $(this).addClass('open-filter')
        })
    })
});
$(function() {
    $('#wrapper').on('click', '#sidebar #btnclose', function(event) {
        $('#sidebar').removeClass('open');
        $('#sidebar-filter').fadeOut(750, function() {
            $(this).removeClass('open-filter')
        })
    })
});
$(function() {
    $('#wrapper').on('click', '#sidebar-filter', function(event) {
        $('#sidebar').removeClass('open');
        $('#sidebar-filter').fadeOut(750, function() {
            $(this).removeClass('open-filter')
        })
    })
})
