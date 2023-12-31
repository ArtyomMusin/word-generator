import generateDocument from './total/generateDocument'
import { Packer } from 'docx'
import { saveAs } from 'file-saver'
import { IData } from './types/document'

export const generate = async (data: IData) => {
    const documentCreator = new generateDocument(data)
    const doc = await documentCreator.createDocument()

    Packer.toBlob(doc).then(blob => {
        saveAs(blob, "example.docx")
    })
}
