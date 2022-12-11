function insertItem() {
    var name_elem=document.getElementById("item-name-input");
    var name=name_elem.value;
    var price_elem=document.getElementById("item-price-input");
    var price=parseInt(price_elem.value);

    name_elem.value='';
    price_elem.value='';

    if(name=='' || isNaN(price)){
        return;
    }
    
    var newRow=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');

    let sr_elem=document.querySelectorAll('[data-type=sr_no]');
    let counter=sr_elem.length;

    td1.innerText=counter+1; //todo fixed
    td2.innerText=name;
    td3.innerText=price;

    td1.dataset.type="sr_no";
    td2.dataset.nsTest="item-name";
    td3.setAttribute("data-ns-test","item-price");

    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);

    let mainTable=document.getElementsByTagName('table')[0];
    mainTable.appendChild(newRow);

    let grandTotal=0;
    let price_elements = document.querySelectorAll('[data-ns-test=item-price]');
    price_elements.forEach((single_price_element) => {
        let single_price=single_price_element.innerText;
        single_price=parseInt(single_price);
        grandTotal+=single_price;
    });

    document.querySelector('[data-ns-test=grandTotal]').innerText=grandTotal;
    
}