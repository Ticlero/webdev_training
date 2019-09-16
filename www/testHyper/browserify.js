class testCloud {
  constructor(text) {
    var test = this.wordFrequncy(text);
    test.sort(function compareFn(a, b)
    {
        return (b.weight<a.weight)?-1:(a.weight==b.weight)?0:1;
    });
    var testArr = [];
    for(var i=0; i<200; i++)
    {
      testArr.push(test[i]);
    }
    $('#td_one').text(testArr[0].text);$('#td_one_freq').text(testArr[0].weight);
    $('#td_two').text(testArr[1].text);$('#td_two_freq').text(testArr[1].weight);
    $('#td_three').text(testArr[2].text);$('#td_three_freq').text(testArr[2].weight);
    $('#td_four').text(testArr[3].text);$('#td_four_freq').text(testArr[3].weight);
    $('#td_five').text(testArr[4].text);$('#td_five_freq').text(testArr[4].weight);
    $('#td_six').text(testArr[5].text);$('#td_six_freq').text(testArr[5].weight);
    $('#td_seven').text(testArr[6].text);$('#td_seven_freq').text(testArr[6].weight);
    $('#td_eight').text(testArr[7].text);$('#td_eight_freq').text(testArr[7].weight);
    $('#td_nine').text(testArr[8].text);$('#td_nine_freq').text(testArr[8].weight);
    $('#td_ten').text(testArr[9].text);$('#td_ten_freq').text(testArr[9].weight);
    
    var wordScale = d3.scale.linear().domain([0, 250]).range([0, testArr.length]).clamp(true);
    this.layout = d3.layout.cloud().size([1200, 1200]).words(testArr.map(function (d) {
      return { text: d.text, size: (d.weight>150) ? (d.weight*0.5)>50 ? (d.weight*0.5) : (d.weight*0.5)+10 : (d.weight>100) ? (d.weight * 0.6) : (d.weight+20)*1.5 };
    }))
      .padding(5)
      .rotate(function () {
        return 0;
      })
      .font("Impact")
      .fontSize(function (d) {
        return wordScale(d.size);
      })
      .on("end", this.draw);

    this.layout.start();
    alert("완료!");
  }

  draw(words) {
    var fill = d3.scale.category20();

    d3.select("#testDiv").append("svg")
      .attr("width", 1200)
      .attr("height", 1200)
      .append("g")
      .attr("transform", "translate(600, 600)")
      .selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", function (d) { return d.size + "px"; })
      .style("font-family", "impact")
      .style("fill", function (d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function (d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function (d) { return d.text; })
      .on("click", function(d)
      {
        alert(d.text);
      });
  }

  wordFrequncy(word) {
    var obj = [];
    var words = word.replace(/[\!\.\,\:\;\?\"-\+\_\'\/\[\|\]]/g, "").split(' ');
    for (var keyword in words) {
      var count = 0;
      var node = { text: words[keyword], weight: 0 };
      for (var j = 0; j < obj.length; j++) {
        if (node.text == obj[j].text)
          count++;
      }
      if (node.text != "" && count < 1) {
        obj.push(node);
        count = 0;
      }
    }

    for (var i = 0; i < obj.length; i++) {
      for (var j = 0; j < words.length; j++) {
        if (obj[i].text == words[j]) {
          obj[i].weight++;
        }
      }
    }
    return obj;
  }


  wordFrequncy2(word) {
    var obj = [];
    var campareObj = [];
    var words = word.split('\n'); //.replace(/[\!\.\,\:\;\?\"-\+\_\'\/\[\|\]]/g, "")
    for (var keyword in words) {
      var count = 0;
      var string = words[keyword].split(' ');
      for (var i = 3; i < string.length; i++) {
        var node = { text: string[i], weight: 0 };
        campareObj.push(node);
        for (var j = 0; j < obj.length; j++) {
          if (node.text == obj[j].text)
            count++;
        }
        if (node.text != "" && count < 1 && node.text !="이모티콘" && node.text !="사진" && node.text != "---------------" && node.text != "샵검색:" && node.text != "페이스톡") {
          obj.push(node);
          count = 0;
        }
      }
    }

    for (var i = 0; i < obj.length; i++) {
      for (var j = 0; j < campareObj.length; j++) {
        if (obj[i].text == campareObj[j].text) {
          obj[i].weight++;
        }
      }
    }
    alert("완료");
    return obj;
  }

}