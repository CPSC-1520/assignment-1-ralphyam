
// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function

  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE"/>
      <div class="card-body">
        <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
        <p class="card-text">ALBUM TITLE HERE</p>
      </div>
    </div>
  </div>

document.addEventListener('DOMContentLoaded', () => {
  const albumForm = document.getElementById('album-form');


  albumForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formElements = event.target.elements;
    const albumTitle = formElements['album-title'].value.trim();
    const albumDescription = formElements['album-description'].value.trim();
    const albumArt = formElements['album-art'].value;

  
    clearValidationErrors(formElements);

    const isValid = validateInputs(albumTitle, albumDescription, albumArt, formElements);

    if (isValid) {
      createAlbum(albumTitle, albumDescription, albumArt);

    
      albumForm.reset();
    }
  });


  function clearValidationErrors(formElements) {
    formElements['album-title'].classList.remove('is-invalid');
    formElements['album-description'].classList.remove('is-invalid');
    formElements['album-art'].classList.remove('is-invalid');
  }

  function validateInputs(title, description, art, formElements) {
    let isValid = true;

    if (title === '') {
      formElements['album-title'].classList.add('is-invalid');
      isValid = false;
    }

    if (description === '') {
      formElements['album-description'].classList.add('is-invalid');
      isValid = false;
    }

    if (art === '') {
      formElements['album-art'].classList.add('is-invalid');
      isValid = false;
    }

    return isValid;
  }

  function createAlbum(title, description, art) {
    const albumList = document.getElementById('all-albums-list');

    const albumCard = document.createElement('div');
    albumCard.classList.add('col');

    albumCard.innerHTML = `
      <div class="card shadow-sm">
        <img src="img/${art}" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    `;

    albumList.appendChild(albumCard);
  }
});
