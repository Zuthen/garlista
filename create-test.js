import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error("Podaj nazwę komponentu jako argument, np. 'HeaderName'");
  process.exit(1);
}

// Funkcja rekurencyjnego szukania katalogu komponentu
function findComponentDir(startDir, targetName) {
  const files = fs.readdirSync(startDir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      if (file.name === targetName) {
        return path.join(startDir, file.name);
      }
      // szukaj w podkatalogu
      const found = findComponentDir(path.join(startDir, file.name), targetName);
      if (found) return found;
    }
  }
  return null;
}

// Szukamy katalogu od katalogu projektu (tam gdzie jest package.json)
const projectRoot = process.cwd();

const componentDir = findComponentDir(projectRoot, componentName);

if (!componentDir) {
  console.error(`Nie znalazłem folderu komponentu o nazwie "${componentName}"`);
  process.exit(1);
}

// Generowanie ścieżki i zawartości pliku testowego
const testFileName = `${componentName}.test.tsx`;
const testFilePath = path.join(componentDir, testFileName);

const testContent = `
import React from 'react';
import { render } from '@testing-library/react-native';
import {${componentName}} from './${componentName}';

describe('${componentName}', () => {
  it('', () => {
    // Arrange
    const sut = render(<${componentName} />);
    // Act
    // Assert
  });
});
`.trimStart();

// Jeśli plik testowy nie istnieje, tworzymy go
if (fs.existsSync(testFilePath)) {
  console.log(`Plik testowy już istnieje: ${testFilePath}`);
} else {
  fs.writeFileSync(testFilePath, testContent);
  console.log(`Utworzono plik testowy: ${testFilePath}`);
}
