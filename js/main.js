var headerIsFixed = false;
$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    // Do something
    var maxOffset = 350;

    var opacity = Math.min(scroll / maxOffset, 0.865);
    $('header').css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');

    if (!headerIsFixed && scroll > 100) {
        $('header').addClass('is-fixed');
        headerIsFixed = true;
    }

    if (headerIsFixed && scroll < 100) {
        $('header').removeClass('is-fixed');
        headerIsFixed = false;
    }
});


$("#mc-SUBSCRIBE").submit(function(e) {
    e.preventDefault();

    var self = $(this);
    var first_name = self.find("#mc-FNAME").val();
    var last_name = self.find("#mc-LNAME").val();
    var email = self.find("#mc-EMAIL").val();

    if (!email) return;

    self.find('button').attr('disabled', true);

    var request = new Request('https://changeable-withdrawal.glitch.me/mailchimp', {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            email_address: "opemipoaikomo@gmail.com",
            status: "subscribed",
            merge_fields: {
                FNAME: "Name",
                LNAME: "Name"
            }
        })
    });

    fetch(request).then(function(response) {
        return response.json();
    }).then(function(response) {
        if (response.status == 'subscribed') {
            $("#mc-SUBSCRIBE-FORM").hide();
            $("#mc-SUBSCRIBE-SUCCESS").show();
        } else {
            $('#mc-SUBSCRIBE-FORM').find('p').html("Error! " + response.title);
             self.find('button').attr('disabled', false);
        }
    });
});
