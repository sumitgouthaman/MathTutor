function mathtutor($scope) {
    $scope.gametitle="MathTutor";
    $scope.maxNumber = 21;
    $scope.reloadPage = function () {
        $scope.noOfApples = 3;
        $scope.noOfIceCreams = 0;
        $scope.getNewQuestion();
    }

    $scope.getNewQuestion = function () {
        var n1 = Math.floor(Math.random() * $scope.maxNumber);
        var n2 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.question = n1 + " + " + n2;
        $scope.answer = n1 + n2;
        $scope.userAnswer = "";
    }
    $scope.onVoiceAnswer = function(){
        if ($scope.userAnswer && parseInt($scope.userAnswer) == $scope.answer) {
            $scope.onRightAnswer();
        }
    }
    $scope.onSubmitAnswer = function () {
        if ($scope.userAnswer && parseInt($scope.userAnswer) == $scope.answer) {
            $scope.onRightAnswer();
        } else {
            $scope.onWrongAnswer();
        }
    }

    $scope.onRightAnswer = function () {
        $scope.noOfIceCreams++;
        $scope.getNewQuestion();
    }

    $scope.onWrongAnswer = function () {
        $scope.noOfApples--;
        if ($scope.noOfApples <= 0) {
            $("#lost-modal").modal();
        }
    }
    $scope.skipQuestion = function(){
        $scope.getNewQuestion();
        $scope.noOfIceCreams--;
    }
    $scope.range = function (num) {
        return new Array(num);
    }
}