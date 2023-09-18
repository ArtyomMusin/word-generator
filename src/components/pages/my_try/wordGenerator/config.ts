import { PageOrientation } from 'docx'

const multiSettings = {
    font: 'Arial'
}

export const config = {
    documentOrientation: PageOrientation.LANDSCAPE,  // LANDSCAPE or PORTRAIT
    font: multiSettings.font,
    heading1: {
        color: '#575AEF',
        size: 28,
        font: multiSettings.font,
        bold: true
    },
    heading2: {
        color: '#575AEF',
        size: 24,
        font: multiSettings.font,
        bold: true
    },
    heading3: {
        color: '#000000',
        size: 22,
        font: multiSettings.font,
        bold: true
    },
    heading4: {
        color: '#000000',
        size: 20,
        font: multiSettings.font,
        bold: true,
        italics: false
    }
}