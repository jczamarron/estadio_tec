$('#img-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

$('#registrar').click(function(){
    var nombre = $('#name').val()
    var empresa = $('#company').val()
    var mail = $('#mail').val()
    var fi = $('#fi').val()
    var ff = $('#ff').val()
    var hi = $('#hi').val()
    var hf = $('#hf').val()
    var assit = $('#assistants').val()
    var patr = $('#sponsor').val()
    var desc = $('#description').val()
    var parking = $("#parking ").is(':checked')
    var conss = $('#conss').is(':checked')
    var vffl = $('#vffl').is(':checked')
    var vffv = $('#vffv').is(':checked')
    var va = $('#va').is(':checked')
    var vfav = $('#vfav').is(':checked')
    var ve = $('#ve').is(':checked')
    var gym = $('#gym').is(':checked')
    var ef = $('#ef').is(':checked')
    var sb = $('#sb').is(':checked')
    var cancha = $('#cancha').is(':checked')
    var gp = $('#gp').is(':checked')
    var go = $('#go').is(':checked')
    var gh = $('#gh').is(':checked')
    var cemex = $('#cemex').is(':checked')
    var sound = $('#sound').is(':checked')
    var internet = $('#internet').is(':checked')
    var screen = $('#screen').is(':checked')
    var ticket = $('#ticket').is(':checked')
    var clean = $('#clean').is(':checked')
    var ill = $('#ill').is(':checked')

    json_to_send = {
        "name": `${nombre}`,
        "company": `${empresa}`,
        "description": `${desc}`,
        "email": `${mail}`,
        "assistants": `${assit}`,
        "dateI1": `${fi}`,
        "dateF1": `${ff}`,
        "dateI2": `${fi}`,
        "dateF2": `${ff}`,
        "hourI": `${hi}`,
        "hourF": `${hf}`,
        "sponsors": `${patr}`,
        "services":{
            "sound": sound,
            "internet": internet,
            "screen": screen,
            "ticket": ticket,
            "cleaning": clean,
            "illumination": ill
        },
        "places":{
            "parking": parking,
            "concession": conss,
            "lffdresser": vffl,
            "vffdresser": vffv,
            "rdresser": va,
            "vafdresser": vfav,
            "tdresser": ve,
            "gym": gym,
            "physiotherapy": ef,
            "lounge": sb,
            "field": cancha,
            "standsP": gp,
            "standsO": go,
            "standsH": gh,
            "cemex": cemex
        }
    }

    json_to_send = JSON.stringify(json_to_send)

    if (nombre != "" && empresa != "" && emailIsValid(mail)){
        $.ajax({
            url: 'http://localhost:3000/mail',
            //url: 'https://estadioak-api.herokuapp.com/mail',
            headers: {
                'Content-Type':'application/json'
            },
            method: 'POST',
            dataType: 'json',
            data: json_to_send,
            success: function(data){
                console.log(data)
            },
            error: function(error_msg){
                console.log(error_msg);
                var err = (error_msg.responseText)
            }
        })
        alert("Se envio su solicitud")
        $('#name').val("")
        $('#company').val("")
        $('#mail').val("")
        $('#fi').val("")
        $('#ff').val("")
        $('#hi').val("")
        $('#hf').val("")
        $('#assistants').val("")
        $('#sponsor').val("")
        $('#description').val("")
        $("#parking ").prop('checked', false)
        $('#sb').prop('checked', false)
        $('#cancha').prop('checked', false)
        $('#cemex').prop('checked', false)
        $('#sound').prop('checked', false)
        $('#internet').prop('checked', false)
        $('#screen').prop('checked', false)
        $('#ticket').prop('checked', false)
        $('#ill').prop('checked', false)
        $("#name").removeClass("req")
        $("#company").removeClass("req")
        $("#mail").removeClass("req")
    }
    else{
        $("#name").addClass("req")
        $("#company").addClass("req")
        $("#mail").addClass("req")
    }
})