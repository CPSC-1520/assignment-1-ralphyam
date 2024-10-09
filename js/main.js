
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

document.addEventListener("DOMContentLoaded", function() {

  const albumForm = document.getElementById('album-form');

 
  albumForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const { titleInput, descriptionInput, artSelect } = getFormElements(event);


    const isValid = validateForm(titleInput, descriptionInput, artSelect);

  
    if (isValid) {
      addAlbumCard(titleInput.value, descriptionInput.value, artSelect.value);
      resetForm(titleInput, descriptionInput, artSelect);
      titleInput.focus();
    }
  });


  function getFormElements(event) {
    const titleInput = event.target.elements['album-title'];
    const descriptionInput = event.target.elements['album-description'];
    const artSelect = event.target.elements['album-art'];
    
    return { titleInput, descriptionInput, artSelect };
  }

  function validateForm(titleInput, descriptionInput, artSelect) {
    let isValid = true;


    if (!validateTitle(titleInput.value)) {
      titleInput.classList.add('is-invalid');
      isValid = false;
    } else {
      titleInput.classList.remove('is-invalid');
    }

  
    if (!validateDescription(descriptionInput.value)) {
      descriptionInput.classList.add('is-invalid');
      isValid = false;
    } else {
      descriptionInput.classList.remove('is-invalid');
    }


    if (!validateArt(artSelect.value)) {
      artSelect.classList.add('is-invalid');
      isValid = false;
    } else {
      artSelect.classList.remove('is-invalid');
    }

    return isValid;
  }


  function validateTitle(title) {
    return title.trim() !== '' && title.length <= 60;
  }


  function validateDescription(description) {
    return description.trim() !== '' && description.length <= 255;
  }

  function validateArt(art) {
    return art.trim() !== '' && art.endsWith('.gif');
  }

  function addAlbumCard(title, description, art) {
    const albumList = document.getElementById('all-albums-list');

    const albumCard = document.createElement('div');
    albumCard.classList.add('album-card', 'card', 'mb-3');
    albumCard.innerHTML = `
      <img src="img/${art}" class="card-img-top" alt="Album Art">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
      </div>
    `;


    albumList.prepend(albumCard);
  }


  function resetForm(titleInput, descriptionInput, artSelect) {
    titleInput.value = '';
    descriptionInput.value = '';
    artSelect.value = '';
  }
});

