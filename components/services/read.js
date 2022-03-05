import * as FileSystem from 'expo-file-system';


export const read = (fileUri) => {
    FileSystem.readAsStringAsync(fileUri).then((res)=>{return res})
}