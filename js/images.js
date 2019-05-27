var images = [1,2,3,4,5,6];

var gallery = document.getElementById('gallery');

for(image of images){
    gallery.innerHTML += `
        <div class="card">
            <a href="#" data-toggle="modal" data-target="#id${image}">
                <img src="images/${image}.png" alt="" class="card-img-top rounded">
            </a>
        </div>
        <div class="modal fade" id="id${image}" tabindex="-1" style="box-sizing:border-box;" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <button type="button" class="close" data-dismiss="modal" class="mr-4" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <img src="images/${image}.png" alt="" class="img-fluid rounded">
            </div>
        </div>
    `
}

for(image of images){
    gallery.innerHTML += `
        <div class="card">
            <a href="#" data-toggle="modal" data-target="#id${image}">
                <img src="images/${image}.png" alt="" class="card-img-top rounded">
            </a>
        </div>
        <div class="modal fade" id="id${image}" tabindex="-1" style="box-sizing:border-box;" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <button type="button" class="close" data-dismiss="modal" class="mr-4 mt-4" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <img src="images/${image}.png" alt="" class="img-fluid rounded">
            </div>
        </div>
    `
}