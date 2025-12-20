const fs = require('fs');
const path = require('path');

describe('README.md', () => {
  let readmeContent;

  beforeAll(() => {
    const readmePath = path.join(__dirname, 'README.md');
    readmeContent = fs.readFileSync(readmePath, 'utf-8');
  });

  test('should exist', () => {
    expect(readmeContent).toBeDefined();
    expect(readmeContent.length).toBeGreaterThan(0);
  });

  test('should contain profile name', () => {
    expect(readmeContent).toContain('Pedro Costa');
  });

  test('should contain social media links', () => {
    expect(readmeContent).toContain('LinkedIn');
    expect(readmeContent).toContain('Twitter');
  });

  test('should contain writings section', () => {
    expect(readmeContent).toContain('Some writings');
  });

  test('should contain AI experiments section', () => {
    expect(readmeContent).toContain('Some AI Experiments');
  });

  test('should contain NPM packages section', () => {
    expect(readmeContent).toContain('Published NPM Packages');
  });
});
