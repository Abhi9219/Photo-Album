'use strict'

albumModel.controller("albumController",
     function($scope){
        
       $scope.images = [
           {image: 'Images/image_01.jpg', thumbnail: 'Images/image_01.jpg', description: 'First College Fest with Some of Cool guyz :)'},
           {image: 'Images/image_02.jpg', thumbnail: 'Images/image_02.jpg', description: 'Reading my poem for teachers on Teachers Day'},
           {image: 'Images/image_03.jpg', thumbnail: 'Images/image_03.jpg', description: 'Paagal wali Holi :)'},
           {image: 'Images/image_04.jpg', thumbnail: 'Images/image_04.jpg', description: 'Jack Sparraow Bday :D '},
           {image: 'Images/image_05.jpg', thumbnail: 'Images/image_05.jpg', description: 'The Perfect Capture.'},
           {image: 'Images/image_06.jpg', thumbnail: 'Images/image_06.jpg', description: 'The first tablet. Playing Angry Birds ;)'},
           {image: 'Images/image_07.jpg', thumbnail: 'Images/image_07.jpg', description: 'Worst novel read during College Life :('},
           {image: 'Images/image_08.jpg', thumbnail: 'Images/image_08.jpg', description: 'Time Pass Comapanion'},
           {image: 'Images/image_09.jpg', thumbnail: 'Images/image_09.jpg', description: 'Our Dog named Intel :P '},
           {image: 'Images/image_10.jpg', thumbnail: 'Images/image_10.jpg', description: 'Among those only one idiot is there. :D'},
           {image: 'Images/image_12.jpg', thumbnail: 'Images/image_12.jpg', description: 'Friends Forever :)'},
           {image: 'Images/image_13.jpg', thumbnail: 'Images/image_13.jpg', description: 'Preety Girl :D'},
           {image: 'Images/image_14.jpg', thumbnail: 'Images/image_14.jpg', description: 'Graduation Get-Together.'},
           {image: 'Images/image-15.jpg', thumbnail: 'Images/image-15.jpg', description: 'Finally the Scribble Day. :)'}
        ];
      $scope.currentImage = _.first($scope.images);
      $scope.setCurrentImage = function(image) {
      $scope.currentImage = image;
      }
    }
);

/*$scope.fetch = function() {
    $http.get("images.json").success()
} */