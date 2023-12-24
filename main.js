function playSong(id) {
    
    const player = document.getElementById('player')
    player.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1'
    console.log("song playing")
}