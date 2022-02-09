const folders = [
    {
        id: 5,
        name: 'Klasör 1',
        files: [
            { id: 17, name: 'profil.jpg' },
            { id: 18, name: 'manzara.jpg' },
        ],
    },
    {
        id: 6,
        name: 'Klasör 2',
        files: [
            { id: 21, name: 'foto.png' },
            { id: 22, name: 'dosya.xls' },
        ],
    },
    {
        id: 7,
        name: 'Klasör 3',
    },
]



function removeFolder(removeNumber) {

    const removeFold = folders.find((folder) => folder.id == removeNumber)

    if (removeFold) {
        const removeIndex = folders.findIndex((f) => f.id == removeNumber)
        folders.splice(removeIndex, 1)
        console.log(folders)
    } else {
        console.log("This id does not exist")
    }

}



function parentFolderOf(filesId) {
    const parentFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id == filesId))

    if (parentFolder) {
        console.log(parentFolder.id)
    } else {
        console.log("Invalid id")
    }

}



function remove(id) {
    const removeFile = folders.find((folder) => folder.files && folder.files.find((file) => file.id == id))

    if (removeFile) {

        const removeIndex = removeFile.files.findIndex((file) => file.id == id)
        removeFile.files.splice(removeIndex, 1)
        console.log(folders)
    } else {

        console.log("This id does not exist.");
    }
}


function copy(fileNumber, folderNumber) {

    const copyFolder = folders.find((folder) => folder.id == folderNumber)
    const copyFile = folders.find((folder) => folder.files && folder.files.find((f) => f.id == fileNumber))

    if (copyFolder && copyFile) {
        const copyFileIndex = copyFile.files.findIndex((f) => f.id == fileNumber)

        if (copyFolder.files) {
            const newCopy = copyFolder.files.push(copyFile.files[copyFileIndex])
        } else {
            copyFolder.files = [copyFile.files[copyFileIndex]]
        }

        console.log(folders);

    } else {

        console.log("Invalid number");
    }
}




function move(fileNumber, folderNumber) {

    const copyFile = folders.find((folder) => folder.files && folder.files.find((f) => f.id == fileNumber))
    const copyFolder = folders.find((folder) => folder.id == folderNumber)

    if (copyFolder && copyFile) {

        const copyFileIndex = copyFile.files.findIndex((f) => f.id == fileNumber)
        if (copyFolder.files) {
            copyFolder.files.push(copyFolder.files[copyFileIndex])
        } else {

            copyFolder.files = [{ files: copyFile.files[copyFileIndex] }]
        }

        copyFile.files.splice(copyFileIndex, 1);

        console.log(folders);

    } else {
        console.log("Invalid number");
    }
} 
