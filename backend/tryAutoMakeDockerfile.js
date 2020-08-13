const util = require('util');
const exec = util.promisify(require('child_process').exec);

const convertPackageArrayToDockerCommandArray = (aPackageArray, aJsonFile) => {
  return aPackageArray.map(element => {
    if (aPackageArray.indexOf(element) === 0)
      return aJsonFile.base[element];
    else
      return aJsonFile.packages[element];
  });
};

const removeSubArray = (anArray) => {
  let dealtArray = [];
  anArray.forEach(element => {
    if (Array.isArray(element))
      element.forEach(subArrayElement => dealtArray.push(subArrayElement));
    else
      dealtArray.push(element);
  });
  return dealtArray;
};

module.exports = {
  autoMakeDockerfile:
    async (aSelectedPackageArray, aDockerCommandArray) => {
      try {
        const aDockerCommandArrayWithSubArray =
          await convertPackageArrayToDockerCommandArray(aSelectedPackageArray,
            aDockerCommandArray);
        const aDockerCommandArrayWithoutSubArray =
          await removeSubArray(aDockerCommandArrayWithSubArray);

        const dockerfile = "Dockerfile";
        aDockerCommandArrayWithoutSubArray.forEach(
          async element => {
            if (aDockerCommandArrayWithoutSubArray.indexOf(element) === 0)
              await exec(`echo FROM ${element} > ${dockerfile}`)
                .catch(err => console.log(err));
            else
              await exec(`echo RUN ${element} >> ${dockerfile}`)
                .catch(err => console.log(err));
          });
      } catch (err) {
        console.log(err);
      }
    }
};

