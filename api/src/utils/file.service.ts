import * as fs from 'fs/promises'

export async function deleteFile (file: string): Promise<boolean> {
  try {
    await fs.unlink(file)
    return true
  } catch (e) {
    return false
  }
}

export async function existFile (file: string): Promise<boolean> {
  try {
    await fs.access(file)
    return true
  } catch (e) {
    return false
  }
}

export async function writeFile (file: string, data: string): Promise<boolean> {
  try {
    await fs.writeFile(file, data)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export async function readFile (file: string): Promise<string | undefined> {
  try {
    return await fs.readFile(file, 'utf-8')
  } catch (e) {
    return undefined
  }
}

export async function appendInFile (file: string, data: string): Promise<boolean> {
  try {
    await fs.appendFile(file, data)
    return true
  } catch (e) {
    return false
  }
}
