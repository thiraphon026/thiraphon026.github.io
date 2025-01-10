/*show menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/**/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*เด้งกลับ*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
    
/*เมนูเบลอ*/
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))


/*เลื่อนลง เมนูเด้งขึ้นมา*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*ปุ่มเด้งกลับหน้าแรก*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*เมนูมีการโต้ตอบ*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



function openModal() {
    document.getElementById("myModal_1").style.display = "block";
  }
  function openModal_2() {
    document.getElementById("myModal_2").style.display = "block";
  }
  function openModal_3() {
    document.getElementById("myModal_3").style.display = "block";
  }
  function openModal_4() {
    document.getElementById("myModal_4").style.display = "block";
  }
  function openModal_5() {
    document.getElementById("myModal_5").style.display = "block";
  }
  function openModal_6() {
    document.getElementById("myModal_6").style.display = "block";
  }
  function openModal_7() {
    document.getElementById("myModal_7").style.display = "block";
  }
  function openModal_8() {
    document.getElementById("myModal_8").style.display = "block";
  }
  function openModal_9() {
    document.getElementById("myModal_9").style.display = "block";
  }
  function openModal_10() {
    document.getElementById("myModal_10").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal_1").style.display = "none";
  }
  function closeModal_2() {
    document.getElementById("myModal_2").style.display = "none";
  }
  function closeModal_3() {
    document.getElementById("myModal_3").style.display = "none";
  }
  function closeModal_4() {
    document.getElementById("myModal_4").style.display = "none";
  }
  function closeModal_5() {
    document.getElementById("myModal_5").style.display = "none";
  }
  function closeModal_6() {
    document.getElementById("myModal_6").style.display = "none";
  }
  function closeModal_7() {
    document.getElementById("myModal_7").style.display = "none";
  }
  function closeModal_8() {
    document.getElementById("myModal_8").style.display = "none";
  }
  function closeModal_9() {
    document.getElementById("myModal_9").style.display = "none";
  }
  function closeModal_10() {
    document.getElementById("myModal_10").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides1 = document.getElementsByClassName("mySlides1");
    var slides2 = document.getElementsByClassName("mySlides2");
    var slides3 = document.getElementsByClassName("mySlides3");
    var slides4 = document.getElementsByClassName("mySlides4");
    var slides5 = document.getElementsByClassName("mySlides5");
    var slides6 = document.getElementsByClassName("mySlides6");
    var slides7 = document.getElementsByClassName("mySlides7");
    var slides8 = document.getElementsByClassName("mySlides8");
    var slides9 = document.getElementsByClassName("mySlides9");
    var slides10 = document.getElementsByClassName("mySlides10");
    var dots1 = document.getElementsByClassName("demo1");
    var dots2 = document.getElementsByClassName("demo2");
    var dots3 = document.getElementsByClassName("demo3");
    var dots4 = document.getElementsByClassName("demo4");
    var dots5 = document.getElementsByClassName("demo5");
    var dots6 = document.getElementsByClassName("demo6");
    var dots7 = document.getElementsByClassName("demo7");
    var dots8 = document.getElementsByClassName("demo8");
    var dots9 = document.getElementsByClassName("demo9");
    var dots10 = document.getElementsByClassName("demo10");
    var caption_1Text = document.getElementById("caption_1");
    var caption_2Text = document.getElementById("caption_2");
    var caption_3Text = document.getElementById("caption_3");
    var caption_4Text = document.getElementById("caption_4");
    var caption_5Text = document.getElementById("caption_5");
    var caption_6Text = document.getElementById("caption_6");
    var caption_7Text = document.getElementById("caption_7");
    var caption_8Text = document.getElementById("caption_8");
    var caption_9Text = document.getElementById("caption_9");
    var caption_10Text = document.getElementById("caption_10");
    if (n > slides1.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides1.length}
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }
    for (i = 0; i < slides6.length; i++) {
        slides6[i].style.display = "none";
    }
    for (i = 0; i < slides7.length; i++) {
        slides7[i].style.display = "none";
    }
    for (i = 0; i < slides8.length; i++) {
        slides8[i].style.display = "none";
    }
    for (i = 0; i < slides9.length; i++) {
        slides9[i].style.display = "none";
    }
    for (i = 0; i < slides10.length; i++) {
        slides10[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    for (i = 0; i < dots5.length; i++) {
        dots5[i].className = dots5[i].className.replace(" active", "");
    }
    for (i = 0; i < dots6.length; i++) {
        dots6[i].className = dots6[i].className.replace(" active", "");
    }
    for (i = 0; i < dots7.length; i++) {
        dots7[i].className = dots7[i].className.replace(" active", "");
    }
    for (i = 0; i < dots8.length; i++) {
        dots8[i].className = dots8[i].className.replace(" active", "");
    }
    for (i = 0; i < dots9.length; i++) {
        dots9[i].className = dots9[i].className.replace(" active", "");
    }
    for (i = 0; i < dots10.length; i++) {
        dots10[i].className = dots10[i].className.replace(" active", "");
    }
    slides1[slideIndex-1].style.display = "block";
    slides2[slideIndex-1].style.display = "block";
    slides3[slideIndex-1].style.display = "block";
    slides4[slideIndex-1].style.display = "block";
    slides5[slideIndex-1].style.display = "block";
    slides6[slideIndex-1].style.display = "block";
    slides7[slideIndex-1].style.display = "block";
    slides8[slideIndex-1].style.display = "block";
    slides9[slideIndex-1].style.display = "block";
    slides10[slideIndex-1].style.display = "block";
    dots1[slideIndex-1].className += " active";
    dots2[slideIndex-1].className += " active";
    dots3[slideIndex-1].className += " active";
    dots4[slideIndex-1].className += " active";
    dots5[slideIndex-1].className += " active";
    dots6[slideIndex-1].className += " active";
    dots7[slideIndex-1].className += " active";
    dots8[slideIndex-1].className += " active";
    dots9[slideIndex-1].className += " active";
    dots10[slideIndex-1].className += " active";
    caption_1Text.innerHTML = dots1[slideIndex-1].alt;
    caption_2Text.innerHTML = dots2[slideIndex-1].alt;
    caption_3Text.innerHTML = dots3[slideIndex-1].alt;
    caption_4Text.innerHTML = dots4[slideIndex-1].alt;
    caption_5Text.innerHTML = dots5[slideIndex-1].alt;
    caption_6Text.innerHTML = dots6[slideIndex-1].alt;
    caption_7Text.innerHTML = dots7[slideIndex-1].alt;
    caption_8Text.innerHTML = dots8[slideIndex-1].alt;
    caption_9Text.innerHTML = dots9[slideIndex-1].alt;
    caption_10Text.innerHTML = dots10[slideIndex-1].alt;
}


/*----------------------------------------------------------*/
const imageUrl = 'https://example.com/path/to/image.jpg'; // เปลี่ยนเป็น URL ของภาพที่ต้องการแชร์

function share(platform) {
    const text = document.getElementById('shareText').value;
    const hashtag = '#แอ่วเจียงฮาย';
    const fullText = `${text} ${hashtag}`;
    
    const encodedText = encodeURIComponent(fullText);
    const encodedImageUrl = encodeURIComponent(imageUrl);

    let shareUrl = '';

    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedImageUrl}&quote=${encodedText}`;
            break;
        case 'line':
            shareUrl = `https://line.me/R/msg/text/?${encodedText}%20${encodedImageUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedImageUrl}`;
            break;
        case 'instagram':
            alert('กรุณาบันทึกรูปภาพและแชร์จากแอป Instagram'); // Instagram ไม่มี URL แชร์ตรง
            return;
        default:
            return;
    }

    window.open(shareUrl, '_blank');
}


/*-------------------------------------------------------------------------------------------------------*/

// ฟังก์ชันส่งคอมเมนต์ใหม่
function submitComment() {
  const commentText = document.getElementById('comment-text').value;
  const commentImages = document.getElementById('comment-images');
  const imagePreview = document.getElementById('images-preview');

  if (!commentText && commentImages.files.length === 0) {
    alert('กรุณาพิมพ์ข้อความหรือเลือกรูปภาพอย่างน้อยหนึ่งอย่าง');
    return;
  }

  const commentList = document.getElementById('comment-list');
  const newComment = document.createElement('div');
  newComment.classList.add('comment-item');

  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile-container');

  const nicknameContainer = document.createElement('div');
  nicknameContainer.classList.add('nickname-container');

  const nicknameElement = document.createElement('div');
  nicknameElement.classList.add('nickname');
  nicknameElement.textContent = 'ผู้ใช้ไม่ระบุ';

  const dateElement = document.createElement('div');
  dateElement.classList.add('comment-date');
  dateElement.textContent = new Date().toLocaleDateString('th-TH');

  nicknameContainer.appendChild(nicknameElement);
  nicknameContainer.appendChild(dateElement);
  profileContainer.appendChild(nicknameContainer);
  newComment.appendChild(profileContainer);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('comment-image-grid');

  const imagesArray = Array.from(commentImages.files);
  const maxImagesToShow = 5;
  const extraImagesCount = imagesArray.length - maxImagesToShow;

  if (imagesArray.length > 0) {
    const mainImageContainer = document.createElement('div');
    mainImageContainer.classList.add('main-image');
    const mainImage = document.createElement('img');
    mainImage.src = URL.createObjectURL(imagesArray[0]);
    mainImage.onclick = () => openImageViewer(imagesArray, 0);
    mainImageContainer.appendChild(mainImage);
    imageContainer.appendChild(mainImageContainer);
  }

  const smallImagesContainer = document.createElement('div');
  smallImagesContainer.classList.add('small-images');

  imagesArray.slice(1, maxImagesToShow).forEach((file, index) => {
    const smallImage = document.createElement('img');
    smallImage.src = URL.createObjectURL(file);
    smallImage.onclick = () => openImageViewer(imagesArray, index + 1);

    if (index === maxImagesToShow - 2 && extraImagesCount > 0) {
      const overlayContainer = document.createElement('div');
      overlayContainer.classList.add('more-images');
      overlayContainer.appendChild(smallImage);

      const overlayText = document.createElement('span');
      overlayText.classList.add('overlay');
      overlayText.textContent = `+${extraImagesCount}`;
      overlayContainer.appendChild(overlayText);
      smallImagesContainer.appendChild(overlayContainer);
    } else {
      smallImagesContainer.appendChild(smallImage);
    }
  });

  imageContainer.appendChild(smallImagesContainer);
  newComment.appendChild(imageContainer);

  const commentTextElement = document.createElement('div');
  commentTextElement.classList.add('comment-text');
  commentTextElement.textContent = commentText;

  newComment.appendChild(commentTextElement);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-comment-button');
  deleteButton.textContent = 'ลบคอมเมนต์';

  deleteButton.onclick = () => {
    const isCurrentUser = true;

    if (isCurrentUser) {
      const confirmDelete = confirm('คุณต้องการลบคอมเมนต์นี้หรือไม่?');
      if (confirmDelete) {
        newComment.remove();
        removeCommentFromStorage(newComment);
      }
    } else {
      alert('คุณไม่สามารถลบคอมเมนต์ของคนอื่นได้');
    }
  };

  const commentActions = document.createElement('div');
  commentActions.classList.add('comment-actions');

  commentActions.appendChild(deleteButton);
  newComment.appendChild(commentActions);
  commentList.appendChild(newComment);

  saveComments();

  document.getElementById('comment-text').value = '';
  document.getElementById('comment-images').value = '';
  imagePreview.classList.add('hidden');
  imagePreview.innerHTML = '';
}

function saveComments() {
  const commentList = document.getElementById('comment-list');
  const comments = [];

  const commentItems = commentList.getElementsByClassName('comment-item');
  for (let i = 0; i < commentItems.length; i++) {
    const commentItem = commentItems[i];
    const text = commentItem.querySelector('.comment-text').textContent;
    const images = [];

    const imageElements = commentItem.querySelectorAll('.comment-image-grid img');
    imageElements.forEach(img => {
      images.push(img.src);
    });

    comments.push({ text, images });
  }

  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
  const comments = JSON.parse(localStorage.getItem('comments'));

  if (comments) {
    comments.forEach(comment => {
      const commentList = document.getElementById('comment-list');
      const newComment = document.createElement('div');
      newComment.classList.add('comment-item');

      const profileContainer = document.createElement('div');
      profileContainer.classList.add('profile-container');

      const nicknameContainer = document.createElement('div');
      nicknameContainer.classList.add('nickname-container');

      const nicknameElement = document.createElement('div');
      nicknameElement.classList.add('nickname');
      nicknameElement.textContent = 'ผู้ใช้ไม่ระบุ';

      const dateElement = document.createElement('div');
      dateElement.classList.add('comment-date');
      dateElement.textContent = new Date().toLocaleDateString('th-TH');

      nicknameContainer.appendChild(nicknameElement);
      nicknameContainer.appendChild(dateElement);
      profileContainer.appendChild(nicknameContainer);
      newComment.appendChild(profileContainer);

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('comment-image-grid');

      const imagesArray = comment.images;
      const maxImagesToShow = 5;
      const extraImagesCount = imagesArray.length - maxImagesToShow;

      if (imagesArray.length > 0) {
        const mainImageContainer = document.createElement('div');
        mainImageContainer.classList.add('main-image');
        const mainImage = document.createElement('img');
        mainImage.src = imagesArray[0];
        mainImage.onclick = () => openImageViewer(imagesArray, 0);
        mainImageContainer.appendChild(mainImage);
        imageContainer.appendChild(mainImageContainer);
      }

      const smallImagesContainer = document.createElement('div');
      smallImagesContainer.classList.add('small-images');

      imagesArray.slice(1, maxImagesToShow).forEach((imageSrc, index) => {
        const smallImage = document.createElement('img');
        smallImage.src = imageSrc;
        smallImage.onclick = () => openImageViewer(imagesArray, index + 1);

        if (index === maxImagesToShow - 2 && extraImagesCount > 0) {
          const overlayContainer = document.createElement('div');
          overlayContainer.classList.add('more-images');
          overlayContainer.appendChild(smallImage);

          const overlayText = document.createElement('span');
          overlayText.classList.add('overlay');
          overlayText.textContent = `+${extraImagesCount}`;
          overlayContainer.appendChild(overlayText);
          smallImagesContainer.appendChild(overlayContainer);
        } else {
          smallImagesContainer.appendChild(smallImage);
        }
      });

      imageContainer.appendChild(smallImagesContainer);
      newComment.appendChild(imageContainer);

      const commentTextElement = document.createElement('div');
      commentTextElement.classList.add('comment-text');
      commentTextElement.textContent = comment.text;

      newComment.appendChild(commentTextElement);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-comment-button');
      deleteButton.textContent = 'ลบคอมเมนต์';
      deleteButton.onclick = () => {
        const isCurrentUser = true;
        if (isCurrentUser) {
          const confirmDelete = confirm('คุณต้องการลบคอมเมนต์นี้หรือไม่?');
          if (confirmDelete) {
            newComment.remove();
            removeCommentFromStorage(newComment);
          }
        } else {
          alert('คุณไม่สามารถลบคอมเมนต์ของคนอื่นได้');
        }
      };

      const commentActions = document.createElement('div');
      commentActions.classList.add('comment-actions');

      commentActions.appendChild(deleteButton);
      newComment.appendChild(commentActions);
      commentList.appendChild(newComment);
    });
  }
}

function removeCommentFromStorage(commentElement) {
  const comments = JSON.parse(localStorage.getItem('comments'));
  const text = commentElement.querySelector('.comment-text').textContent;
  const images = [];

  const imageElements = commentElement.querySelectorAll('.comment-image-grid img');
  imageElements.forEach(img => {
    images.push(img.src);
  });

  const updatedComments = comments.filter(comment => {
    return !(comment.text === text && JSON.stringify(comment.images) === JSON.stringify(images));
  });

  localStorage.setItem('comments', JSON.stringify(updatedComments));
}

document.addEventListener('DOMContentLoaded', loadComments);

function openImageViewer(images, startIndex) {
  let currentIndex = startIndex;

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modalImage = document.createElement('img');
  modalImage.src = URL.createObjectURL(images[currentIndex]);
  modalImage.classList.add('modal-image');

  const imageCounter = document.createElement('div');
  imageCounter.classList.add('image-counter');
  imageCounter.textContent = `ภาพ ${currentIndex + 1} / ${images.length}`;

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'ปิด';
  closeButton.onclick = () => {
    document.body.removeChild(modalContainer);
  };

  const nextButton = document.createElement('button');
  nextButton.classList.add('next-button');
  nextButton.textContent = 'ถัดไป';
  nextButton.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = URL.createObjectURL(images[currentIndex]);
    imageCounter.textContent = `ภาพ ${currentIndex + 1} / ${images.length}`;
  };

  const prevButton = document.createElement('button');
  prevButton.classList.add('prev-button');
  prevButton.textContent = 'ก่อนหน้า';
  prevButton.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = URL.createObjectURL(images[currentIndex]);
    imageCounter.textContent = `ภาพ ${currentIndex + 1} / ${images.length}`;
  };

  modalContainer.appendChild(modalImage);
  modalContainer.appendChild(imageCounter);
  modalContainer.appendChild(closeButton);
  modalContainer.appendChild(prevButton);
  modalContainer.appendChild(nextButton);

  document.body.appendChild(modalContainer);
}

function previewImages() {
  const files = document.getElementById('comment-images').files;
  const imagesPreviewContainer = document.getElementById('images-preview');
  imagesPreviewContainer.innerHTML = '';
  imagesPreviewContainer.classList.remove('hidden');

  const selectedFiles = Array.from(files);

  selectedFiles.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');

      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.classList.add('preview-image');

      imgElement.onclick = () => {
        openImageViewer(selectedFiles.map(f => e.target.result), index);
      };

      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.textContent = 'ลบ';

      removeButton.onclick = function() {
        selectedFiles.splice(index, 1);
        imageContainer.remove();
      };

      imageContainer.appendChild(imgElement);
      imageContainer.appendChild(removeButton);

      imagesPreviewContainer.appendChild(imageContainer);
    };
    reader.readAsDataURL(file); // อ่านไฟล์เป็น Data URL
  });
}
