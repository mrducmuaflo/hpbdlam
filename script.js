let backgroundMusic = document.getElementById('birthdayMusic');
let currentTrack = null;

document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic.play();
});

function stopBackgroundMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function playTrack(src) {
    if (currentTrack) {
        currentTrack.pause();
        currentTrack.currentTime = 0;
    }
    currentTrack = new Audio(src);
    currentTrack.loop = true; // Lặp lại đoạn nhạc
    currentTrack.play();
}

function showSpecialImages() {
    clearImageContainers();
    stopBackgroundMusic();
    playTrack('sound/soundblam/ssstik.io_1722760253981.mp3');
    document.getElementById('specialPasswordPopup').style.display = 'flex';
}

function showCatImages(catNumber) {
    clearImageContainers();
    stopBackgroundMusic();
    let trackSrc;
    switch (catNumber) {
        case 1:
            trackSrc = 'sound/soundca/ssstik.io_1722541996459.mp3';
            break;
        case 2:
            trackSrc = 'sound/soundoc/ssstik.io_1722685005563.mp3';
            break;
        case 3:
            trackSrc = 'sound/soundmeo/ssstik.io_1722761249501.mp3';
            break;
    }
    playTrack(trackSrc);
    const catImagesContainer = document.getElementById('catImagesContainer');
    const catImages = getCatImages(catNumber);

    catImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('cat-image');
        catImagesContainer.appendChild(img);
    });
}

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value.trim().toLowerCase();
    const passwordMessage = document.getElementById('passwordMessage');
    const container = document.querySelector('.container');
    const passwordSection = document.querySelector('.password-section');

    if (passwordInput === 'hồng' || passwordInput === 'hong') {
        passwordMessage.textContent = 'Chính xác! Chúc mừng bạn đã nhập đúng mật khẩu!';
        container.style.display = 'block';
        passwordSection.style.display = 'none';
        backgroundMusic.play();
    } else if (passwordInput === 'xanhduong') {
        passwordMessage.textContent = 'Chúc mừng bạn đã nhập sai mật khẩu!';
    } else {
        passwordMessage.textContent = 'Chúc mừng bạn đã nhập sai mật khẩu! Thử lại nhé!';
    }
}

function checkSpecialPassword() {
    const specialPasswordInput = document.getElementById('specialPasswordInput').value.trim();
    const specialPasswordMessage = document.getElementById('specialPasswordMessage');
    const specialImagesContainer = document.getElementById('specialImagesContainer');
    const specialPasswordPopup = document.getElementById('specialPasswordPopup');

    if (specialPasswordInput === '02/01' || specialPasswordInput === '2/1') {
        specialPasswordMessage.textContent = 'Đúng dòi đó ựa thật khó để quên!';
        specialImagesContainer.style.display = 'block';
        specialPasswordPopup.style.display = 'none';
        loadSpecialImages();
    } else {
        specialPasswordMessage.textContent = 'Chúc mừng bạn đã nhập sai mật khẩu!';
    }
}

function loadSpecialImages() {
    clearImageContainers();
    const specialImages = [
        'images/blam/0a0108ebf24857160e5913.jpg',
        'images/blam/0f784e9bb4381166482911.jpg',
        'images/blam/45b48a6770c4d59a8cd531.jpg',
        'images/blam/87bf6f22298c8cd2d59d.jpg',
        'images/blam/2794e7471de4b8bae1f529.jpg',
        'images/blam/752587ca7d69d837817814.jpg',
        'images/blam/a070736237cc9292cbdd9.jpg',
        'images/blam/cb243ac2c061653f3c7012.jpg',
        'images/blam/d43c4cdbb67813264a6910.jpg',
        'images/blam/ea978139c39766c93f86.jpg',
        // Thêm đường dẫn các ảnh "Lam và Tôi"
    ];

    const specialImagesContainer = document.getElementById('specialImagesContainer');
    specialImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('special-image');
        specialImagesContainer.appendChild(img);
    });
}

function getCatImages(catNumber) {
    const cat1Images = [
        'images/eca/6adf5ec4f164543a0d7511.jpg',
        'images/eca/21bbf6a75907fc59a51610.jpg',
        'images/eca/24aa63b1cc11694f30008.jpg',
        'images/eca/e6b011acbe0c1b52421d9.jpg',
        'images/eca/64d470c8df687a36237912.jpg',
        'images/eca/fae2e8fa475ae204bb4b7.jpg',
        // Thêm đường dẫn các ảnh của chú mèo 1
    ];

    const cat2Images = [
        'images/eoc/2b06c61e69becce095af14.jpg',
        'images/eoc/5bfe1cff8c5f2901704e12.jpg',
        'images/eoc/57bfdea24e02eb5cb21310.jpg',
        'images/eoc/67a80bb69b163e48670711.jpg',
        'images/eoc/289b8f822022857cdc3313.jpg',
        'images/eoc/b568c94259e2fcbca5f38.jpg',
        'images/eoc/b5121f3d8f9d2ac3738c9.jpg',
        // Thêm đường dẫn các ảnh của chú mèo 2
    ];

    const cat3Images = [
        'images/emeo/4f1a767440d7e589bcc6.jpg',
        'images/emeo/35e825b71314b64aef0521.jpg',
        'images/emeo/f86abe3488972dc9748622.jpg',
        // Thêm đường dẫn các ảnh của chú mèo 3
    ];

    switch (catNumber) {
        case 1:
            return cat1Images;
        case 2:
            return cat2Images;
        case 3:
            return cat3Images;
        default:
            return [];
    }
}

function clearImageContainers() {
    const specialImagesContainer = document.getElementById('specialImagesContainer');
    specialImagesContainer.innerHTML = ''; // Xóa ảnh đặc biệt

    const catImagesContainer = document.getElementById('catImagesContainer');
    catImagesContainer.innerHTML = ''; // Xóa ảnh mèo

    // Dừng và ẩn video
    const videoElement = document.getElementById('bestVideo');
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        document.getElementById('videoContainer').style.display = 'none';
    }

    // Ẩn thông điệp kết thúc nếu có
    const endMessage = document.getElementById('endMessage');
    if (endMessage) {
        endMessage.style.display = 'none';
    }
}

// Thêm vào cuối script.js
function showVideoQuestion() {
    clearImageContainers(); // Xóa ảnh và dừng video đang hiển thị
    stopBackgroundMusic(); // Dừng nhạc nền chính

    // Dừng các nhạc khác đang phát
    if (currentTrack) {
        currentTrack.pause();
        currentTrack.currentTime = 0;
        currentTrack = null;
    }

    document.getElementById('videoQuestionPopup').style.display = 'flex';
}

function checkVideoAnswer() {
    const answer = document.getElementById('videoQuestionInput').value.trim().toLowerCase();
    const message = document.getElementById('videoQuestionMessage');
    const videoContainer = document.getElementById('videoContainer');
    const specialContent = document.getElementById('specialContent'); // Thẻ <p> đặc biệt
    const endMessage = document.getElementById('endMessage');
    const videoQuestionPopup = document.getElementById('videoQuestionPopup');

    if (answer === 'chung của' || answer === 'chungcua') {
        message.textContent = 'Đúng rồi! Câu trả lời chính xác!';
        videoQuestionPopup.style.display = 'none';
        videoContainer.style.display = 'block';
        specialContent.style.display = 'block'; // Hiển thị thẻ <p> đặc biệt
        stopBackgroundMusic(); // Dừng nhạc nền khi video bắt đầu

        const videoElement = document.getElementById('bestVideo');
        videoElement.play();

        videoElement.onended = function() {
            endMessage.style.display = 'block';
            backgroundMusic.play(); // Bắt đầu lại nhạc nền khi video kết thúc
        };
    } else {
        message.textContent = 'Sai rồi! Hãy thử lại!';
    }
}
