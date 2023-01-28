import downloadCSV from './downloadCSV'

const handleDownload = (columns, data) => {
  // console.log(columns, data)
  const csvData = [columns.map((column) => column.label)]

  data.forEach((row) => {
    csvData.push(columns.map((column) => row[column.id]))
  })
  downloadCSV(csvData)
}

export default handleDownload
