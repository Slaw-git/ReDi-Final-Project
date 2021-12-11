
function makeFilmDescription(){
	var myData = localStorage.getItem("objectToSend");
//    localStorage.clear(); //clean the localstorage
    var imageSrc = JSON.parse(myData).imgSrc; 
	var ratingScr = JSON.parse(myData).rating;
	var nameScr = JSON.parse(myData).name;
    var descrScr = JSON.parse(myData).descr;
    $("#newImgSrc").attr("src", imageSrc);
    $(".film-name").html(nameScr);
    $(".film-rating").html(ratingScr);
    $(".film-description").html(descrScr);
    
}


// add new comment to comment's list

$('.review-btn').click(function(event){
    event.preventDefault();
    let ratingOut;
	let name = document.forms["review-form"]["Yname"].value;
    let text = document.forms["review-form"]["Ytext"].value;
    let rating = document.forms["review-form"]["rating"].value;
    let time  = new Date().toJSON().slice(0,10).split('-').reverse().join('-');


    // add new rating and new amount of reviews
    rating = parseInt(rating);
    let reviewNum = [];    
    // let width = $('.rating-'+ rating + ' .rating-progress div').width()
    // $('.rating-'+ rating + ' .rating-progress div').width(width + 20);
    
    let maxReviewNum = 5;
    let summ = 0; 
    let width = 0;
    let sumReviewNum = 0;
    for (let i = 1; i <= maxReviewNum; i++){
        reviewNum[i] = $('.rating-'+ i + ' .sum').html();
        reviewNum[i] = parseInt(reviewNum[i]);
        width = parseInt(width);
        if(i == rating){reviewNum[i] += 1;}        
        sumReviewNum += reviewNum[i];
    }

    // let summAnOneRew = summ / sumReviewNum;

    console.info('sumsumReviewNumm', sumReviewNum);
    for (let i = 1; i <= maxReviewNum; i++){
        $('.rating-'+ i + ' .rating-progress div').width(reviewNum[i]/sumReviewNum * 100 + '%');
        console.info(reviewNum[i]/sumReviewNum);
    }

    $('.rating-'+ rating + ' .sum').html(reviewNum[rating]);
    // end of add new rating and new amount of reviews


    // add stars to new comment
    switch(rating){
        case 1:
            ratingOut = '<i class="fa fa-star"></i>';
            break;
        case 2:
            ratingOut = '<i class="fa fa-star"></i><i class="fa fa-star"></i>';
            break;
        case 3:
            ratingOut = '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
            break;
        case 4:
            ratingOut = '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
            break;
        case 5:
            ratingOut = '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
            break;            
    }

    $('.name-insert').text(name);
    $('.date-insert').text(time);
    $('.review-insert').text(text);
    $('.rating-insert').html(ratingOut);
});

makeFilmDescription();
