
export const isArrayEmpty = (array) => {
  return !Array.isArray(array) || !array.length;
};

export const jsonToArray = (json) => {
  let array;
  try {
    array = JSON.parse(json);
  } catch(e) {
    array = [];
  }
  return array;
}

export const getReadableDiffTime = (d1, d2) => {
  const seconds = Math.abs(d1 - d2) / 1000;
  if (seconds <= 5) {
    return 'Just now';
  } else if (seconds > 5 && seconds < 60) {
    return Math.floor(seconds) + ' seconds ago';
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) {
    return '1 minute ago';
  } else if (minutes > 1 && minutes < 60) {
    return minutes + " minutes ago";
  } 

  const hours = Math.floor(seconds / 3600);
  if (hours === 1) {
    return '1 hour ago';
  }
  return hours + " hours ago";
}  
