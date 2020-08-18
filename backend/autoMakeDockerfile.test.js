const dockerPackages = require('./dockerPackage.json');
const { autoMakeDockerfile } = require('./autoMakeDockerfile');
const fs = require('fs');

describe('Hello, jest!', () => {
  it('the first jest program', () => {
    expect('Hello, world!').toEqual(expect.stringContaining('world'));
  });

  it('Hello, fs!', () => {
    let testData;
    fs.readFile('./package.json', (err, data) => {
      if (err) throw err;
      testData = data.toString();
      expect(testData).toEqual(expect.stringContaining('keywords'));
    });
  });
});

describe('test autoMakeDockerfile module', () => {
  const testRecipe = ["CentOS", "git", "g++"];
  autoMakeDockerfile(testRecipe, dockerPackages);
  it('test whether generating correct dockerfile', () => {
    fs.readFile('./Dockerfile', (err, data) => {
      if (err)
        throw err;
      const fileContent = data.toString();
      expect(fileContent).toEqual(expect.stringContaining('FROM'));
      expect(fileContent).toEqual(expect.stringContaining('RUN'));
      expect(fileContent).toEqual(expect.stringContaining('centos'));
      expect(fileContent).toEqual(expect.stringContaining('yum'));
    });
  });
});
