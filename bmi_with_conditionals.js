function bmiCalculator(weight,height){
    var bmi_index = (weight/(height*height));
    if (bmi_index<18.5){
       var intepretation = "Your BMI is " + bmi_index + ", so you are underweight.";
    } else if (bmi_index>=18.5 && bmi_index<=24.9){
        var intepretation = "Your BMI is " + bmi_index + ", so you have a normal weight.";
    } else if (bmi_index>24.9){
        var intepretation = "Your BMI is " + bmi_index + ", so you are overweight.";
    }
    return intepretation;
};

wei = prompt("Enter your weight");
hei = prompt("Enter your height");

bmiCalculator(wei,hei);