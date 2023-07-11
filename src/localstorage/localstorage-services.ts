// Helper functions
export function getData(storageKey: string) {
  const data: string = localStorage.getItem(storageKey);

  return JSON.parse(data);
}

function findDataIndex(storageKey, dataId: number) {
  const fetchedData: Data[] = getData(storageKey);
  const dataIndex: number = fetchedData.findIndex(data => data.id === dataId);

  return {
    fetchedData,
    dataIndex,
  };
}

// LocalStorage functions
export function setData(storageKey: string, data: unknown) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export function editData(storageKey: string, dataId: number, newData: unknown) {
  const dataToEdit = findDataIndex(storageKey, dataId);

  if (dataToEdit.dataIndex !== -1) {
    dataToEdit.fetchedData[dataToEdit.dataIndex] = newData;
  } else {
    console.log('ERROR! Data not found.');
  }
}

export function deleteData(storageKey: string, dataId: number) {
  const dataToDelte = findDataIndex(storageKey, dataId);

  if (dataToDelte.dataIndex !== -1) {
    dataToDelte.fetchedData.splice(dataToDelte.dataIndex, 1);
    localStorage.setItem(storageKey, JSON.stringify(dataToDelte.fetchedData));
  } else {
    console.log('ERROR! Data not found.');
  }
}
