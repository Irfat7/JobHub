const getLocalStorage = () => {
  let ourLocalStorage = localStorage.getItem("applied-jobs");
  if (ourLocalStorage) {
    ourLocalStorage = JSON.parse(ourLocalStorage);
  } else {
    ourLocalStorage = [];
    localStorage.setItem("applied-jobs", JSON.stringify(ourLocalStorage));
  }

  return ourLocalStorage;
};

const addToLocalStorage = (id) => {
  const storedAppliedJobs = getLocalStorage();
  const updatedAppliedJobs = [...storedAppliedJobs, id]
  localStorage.setItem('applied-jobs', JSON.stringify(updatedAppliedJobs))
};

export {addToLocalStorage, getLocalStorage};
