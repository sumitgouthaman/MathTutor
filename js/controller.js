function mathtutor($scope) {
    $scope.gametitle = "MathTutor";
    $scope.maxNumber = 11;
    $scope.n1 = 0;
    $scope.n2 = 0;
    $scope.reloadPage = function () {
        $scope.noOfApples = 3;
        $scope.noOfIceCreams = 0;
        $scope.getNewQuestion();
    }

    $scope.getNewQuestion = function () {
        $scope.n1 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.n2 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.question = $scope.n1 + " + " + $scope.n2;
        $scope.answer = $scope.n1 + $scope.n2;
        $scope.userAnswer = "";
    }
    $scope.onVoiceAnswer = function () {
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
    $scope.skipQuestion = function () {
        $scope.getNewQuestion();
        $scope.noOfIceCreams--;
    }
    $scope.range = function (num) {
        return new Array(num);
    }
}