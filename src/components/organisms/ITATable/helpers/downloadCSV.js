const downloadCSV = (data, fileName = 'data.csv') => {
  const csvData = data.map((d) => d.join(',')).join('\n')
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
}

export default downloadCSV
