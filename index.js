console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const containers = document.getElementsByClassName('container');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for (container of containers) {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    container.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    container.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'container'
    })

    container.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}
function refreshPage() {
    window.location.reload();
  }
