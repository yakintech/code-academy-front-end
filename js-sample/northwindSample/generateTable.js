const generate = (data, columns) => {

    let academyTable = document.getElementById('codeAcademy');

    //Önce başlıkları sonra içeriği oluşturacağım.
    let firstTrElement = document.createElement('tr');
    columns.forEach((item) => {

        let tdElement = document.createElement('td');
        tdElement.innerHTML = item.title;

        firstTrElement.appendChild(tdElement)

    });

    academyTable.appendChild(firstTrElement);


    //içeriği ekliyorum

    data.forEach((item) => {

        let itemTrElement = document.createElement('tr');

        columns.forEach((element) => {

            var tdElement = document.createElement('td');
            tdElement.innerHTML = item[element.key];

            itemTrElement.appendChild(tdElement);
        });

        academyTable.appendChild(itemTrElement);



    })

}

