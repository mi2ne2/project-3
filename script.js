jQuery(document).ready(function(){
    $('#Centimeter-Converter').on('submit', function(conv){
        conv.preventDefault();
        var $inch = $('#inch');
        var inch = $inch.val();
        var convInch=$("#toCentimeter").val();
        axios.get('https://statenweb.mockable.io/conversions/').then(function(result){
         convVal=result.data[convInch];
        var centiTotal = parseFloat(inch*convVal);
        $('#centiTotal').html(centiTotal);
        console.log(centiTotal);
          
    });
});

$('#Inch-Converter').on('submit', function(conv){
    conv.preventDefault();
        var centi = $('#cent');
        var centi = centi.val();
        var convCenti=$("#toInch").val();
        axios.get('https://statenweb.mockable.io/conversions/').then(function(result){
         convVal2=result.data[convCenti];
        var inchTotal = parseFloat(centi*convVal2);
        $('#inchTotal').html(inchTotal);
        console.log(inchTotal);

    });
});
    
});
