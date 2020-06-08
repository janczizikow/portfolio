require('dotenv').config();
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */
const fs = require('fs');
const { projects } = require('../../seed/seed');

const findPublicRole = async () => {
  const result = await strapi
    .query('role', 'users-permissions')
    .findOne({ type: 'public' });
  return result;
};

const setDefaultPermissions = async () => {
  const role = await findPublicRole();
  const permissions = await strapi
    .query('permission', 'users-permissions')
    .find({ type: 'application', role: role.id });
  await Promise.all(
    permissions.map(p =>
      strapi
        .query('permission', 'users-permissions')
        .update({ id: p.id }, { enabled: true })
    )
  );
};

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: 'type',
    name: 'setup',
  });
  const initHasRun = await pluginStore.get({ key: 'initHasRun' });
  await pluginStore.set({ key: 'initHasRun', value: true });
  return !initHasRun;
};

const getFilesizeInBytes = filepath => {
  const stats = fs.statSync(filepath);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

const getFilePath = fileName => {
  return `./seed/images/${fileName}`;
};

const createSeedData = async () => {
  const projectsPromises = projects.map(project => {
    const {
      thumbnail: { imageFileName, mimeType },
      photos,
      ...rest
    } = project;
    const thumbnailFilepath = getFilePath(imageFileName);
    const thumbnailImage = {
      path: getFilePath(imageFileName),
      name: imageFileName,
      size: getFilesizeInBytes(thumbnailFilepath),
      type: mimeType,
    };
    const files = {
      thumbnail: thumbnailImage,
      photos: photos.map(photo => ({
        path: getFilePath(photo.imageFileName),
        name: photo.imageFileName,
        size: getFilesizeInBytes(getFilePath(photo.imageFileName)),
        type: photo.mimeType,
      })),
    };
    return strapi.services.project.create(
      {
        ...rest,
      },
      { files }
    );
  });
  await Promise.all(projectsPromises);
};

module.exports = async () => {
  const shouldSetDefaultPermissions = await isFirstRun();
  if (shouldSetDefaultPermissions) {
    await setDefaultPermissions();
    await createSeedData();
  }
};
