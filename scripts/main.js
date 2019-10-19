$(document).ready(()=>{
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let emonth = date.getMonth();
    let year = date.getFullYear();
    let eyear = date.getFullYear() + 3;
    let generated = day+'-'+month+'-'+year;
    let expire = day+'-'+emonth+'-'+eyear;

    let card_info = {
        name: "",
        pin: "",
        serial: "",
        amount: "",
        generate: "",
        expires: ""
    }

 
    //credit code
    $('#generate').click(function (e) { 
        e.preventDefault();
        pay_verify = false;
        card_info.name = $("#network").val();
        switch(card_info.name){
            case "mtn": $('#card-logo img').prop("src","/CreditEmbassy/img/cards/mtn.png"); break;
            case "airtel": $('#card-logo img').prop("src","/CreditEmbassy/img/cards/airtel.png"); break;
            case "9mobile": $('#card-logo img').prop("src","/CreditEmbassy/img/cards/9mobile.jpg"); break;
            case "glo": $('#card-logo img').prop("src","/CreditEmbassy/img/cards/glo.jpg"); break;
            case "ntel": $('#card-logo img').prop("src","/CreditEmbassy/img/cards/ntel.jpg"); break;
            default: $('#card-logo img').prop("src", "/CreditEmbassy/img/cards/default-image.jpg");
        }

        card_info.amount = $("#price").val();
        if (price == ""){
            alert('Cannot leave price blank!')
            window.location.reload();
        }
        card_info.generate = generated +'-'+date.toTimeString();
        card_info.expires = expire;
        card_pin_generator();
        card_serial_generator();

        $('#generated span').text(generated);
        $('#expires span').text(card_info.expires);
        $('#pin1').text();
        $('#serial_number').text(card_info.serial);
        $('#pin1').addClass('blur');
        
        console.log(card_info);
    });

    $('#pay').click(function(e){
        //redirect to payment
        var success = true;
        if (success){

            $('#pin1').text(card_info.pin);
            $('#pin1').removeClass('blur');

        }
    })


    function card_pin_generator(value=9999){
        let num = [];
        for (let i=0; i < 4; i++){
            let single_num = Math.floor((Math.random() * value));
            num.push(padding(single_num, 9999, -4));
        }

        card_info.pin = num.join(' ');

    }

    function card_serial_generator(value=99999999999){
        let num = [];
        
        for (let i=0; i<2; i++){
            let serial_num = Math.floor((Math.random() * value));
            num.push(padding(serial_num, 99999999999, -11))
        }

        card_info.serial = num.join(' ').replace(/\s/g,'');

    }
    

    function padding(number, max_num=9999, slicing) {
        if (number <= max_num) { 
            number = ("00000000000"+number).slice(slicing); 
        }

        return number;
    }

})

