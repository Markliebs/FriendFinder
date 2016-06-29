$('#submit').on('click', function () {
    var newFriend = {
        'name': $('#name').val().trim(),
        'photo': $('#photo').val().trim(),
        'scores': [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()]
    };

    console.log(newFriend);

    var currentURL = window.location.origin;

    $.post(currentURL + "/api/friends", newFriend, function (data) {
        console.log(data);

    })
        .done(function (data) {
            console.log(data);
            $('.modal-body').append('<h1> New friend found!</h1>' +
                '<h3> ' + data.name + '</h3>' +
                '<img src="' + data.photo + '" width=300px>');
            $('#myModal').modal('toggle');
        });
})