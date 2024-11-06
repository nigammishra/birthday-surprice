// JavaScript to handle the surprise event
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const surprise = document.getElementById('birthdaySurprise');
    surprise.classList.toggle('hidden');
    
    // Play the birthday song
    const birthdaySong = document.getElementById('birthdaySong');
    birthdaySong.play();
    
    alert('🎉 Surprise! 🎉');
});
