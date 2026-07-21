export const readFileSync = (_path: string, _encoding?: string): string => {
  return "";
};

export const existsSync = (_path: string): boolean => {
  return false;
};

export const statSync = (_path: string) => {
  return {
    isFile: () => true,
  };
};

export const readdirSync = (_path: string) => {
  return [] as string[];
};

const fs = {
  readFileSync,
  existsSync,
  statSync,
  readdirSync,
};

export default fs;
