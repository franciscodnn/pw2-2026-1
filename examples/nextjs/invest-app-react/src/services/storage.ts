import { v4 as uuidv4 } from 'uuid';
import { Investment } from '@/models/Investment';
 
function storageInsert(key: string, data: Investment[] | string) {
  if (Array.isArray(data)) {
    // data = JSON.stringify(data);
    localStorage.setItem(`@invest-app:${key}`, JSON.stringify(data));
    return;
  }
 
  localStorage.setItem(`@invest-app:${key}`, data);
}
 
function storageSelect(key: string, isJSON = true) {
  let dataJSON = localStorage.getItem(`@invest-app:${key}`) ?? '[]';
  let data: Investment[] | string = '';
 
  if (isJSON) {
    data = JSON.parse(dataJSON);
  }
 
  return data;
}
 
function load(resource: string, dataset: Investment[]) {
  if (storageSelect('loaded', false) !== 'ok') {
    storageInsert(resource, dataset);
 
    storageInsert('loaded', 'ok');
  }
}
 
function create(resource: string, data: Investment) {
  const datas = storageSelect(resource);
 
  data = { ...data, id: uuidv4() };

  console.log('create', resource, data, datas);
 
  storageInsert(resource, ([...datas, data] as Investment[]));
 
  return data;
}

function read(resource: string, id?: string) {
    const datas = storageSelect(resource);
 
  if (id) {
    return Array.isArray(datas) ? datas.find((data: Investment) => data.id === id) : datas;
  } else {
    return datas;
  }
}
function update(resource: string, id: string, data: Investment) {
  
  const dataset = storageSelect(resource);

  if(Array.isArray(dataset)) {
 
    const index = dataset.findIndex((data: Investment) => data.id === id); 
    
    if (index >= 0) {
      data = { id, ...data };
  
      dataset[index] = { ...dataset[index], ...data };
  
      storageInsert(resource, dataset);
  
      return data;
    } else {
      return false;
    }
  }
}
function remove(resource: string, id: string) {
    const dataset = storageSelect(resource);

  if(Array.isArray(dataset)) {
 
    const index = dataset.findIndex((data) => data.id === id);
  
    if (index >= 0) {
      (dataset as Array<any>).splice(index, 1);
    }
  
    storageInsert(resource, dataset);
  }
}
 
export default { load, create, read, update, remove };