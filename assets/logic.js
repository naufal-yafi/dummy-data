let data__X1=[],data__X2=[],data__Y=[],
    tX1=0,tX2=0,tY=0;

const dataTotal = 30,
      display = document.querySelector('tbody'),
      btnSave = document.querySelector('button');
/*
    Decsription :
    X1 = Perseverance
    X2 = Parental Guidance
    Y  = Student Achievement

    Where X1 and X2 as the influence factor of Y
*/ 

// Get random number
    const rand = (num) => {
        return Math.floor(Math.random()*num)+1;  
    };

// Collecting data
    for (let i=0; i<dataTotal; i++){
        let nX1,nX2,nY,
            PnX1,PnX2,TnX;
        
        // Find value X2
            // Get random number from 1 - 9
                nX2 = rand(9);
            // nX2 : number can't be less than 2
                nX2 = nX2 < 3 ? nX2 + 1 : nX2;
            // Calculate 50% of X2, as the value of Y
                PnX2 = (nX2*50)/100;
        
        // Find value X1 from X2
            /*
                So, if X2 has a large value then X1 is also the same
                Because X2 (Parental Guidance) also has an effect on X1 (Students' Diligence)
            */
                if (nX2 >= 7){
                    nX1 = 9;
                } else {
                    nX1 = nX2+rand(2);
                }
            // Calculate 50% of X2, as the value of Y
                PnX1 = (nX1*50)/100;

        // Calculate the total percentage of both (X1 & X2), as the value of Y
            TnX = PnX1+PnX2;

        // Y value is the percentage of the previous total
            nY = TnX*10;

        // Values ​​that do not match will be recalculated
            /*
                If X1(Learning Perseverance) is high but still gets a Y(Learning Achievement)
                which is still low, it will be added again, so that it matches the results of his hard work.
            */ 
                if (nX1 > (nY/10)){
                    nY += (PnX1*2); 
                } 
            /*
                However, if X1(Learning Diligence) is low but gets a high Y(Learning Achievement)
                score, it will decrease due to effort.
            */ 
                else if (nX1 < (nY/10)){
                    nY -= (PnX1*2); 
                }

        // Calculation results are accommodated in this variable
            data__X1[i]=nX1;data__X2[i]=nX2;data__Y[i]=nY;
        
        // Calculate the total value on all variables
            tX1+=data__X1[i];tX2+=data__X2[i];tY+=data__Y[i];
    }

// Display Data
    let no=1,temp='';
    console.log("----------------------------\n" +
                "|  No.  |  X1 |  X2 |   Y  |\n" + 
                "|---------------------------" );
    for (let i=0; i<dataTotal; i++){
        if (i%2==0){
            temp += `
                <tr class="dark">
                    <td>${no}.</td>
                    <td>${data__X1[i]}</td>
                    <td>${data__X2[i]}</td>
                    <td>${data__Y[i]}</td>
                </tr>`
            ;
        } else {
            temp += `
                <tr>
                    <td>${no}.</td>
                    <td>${data__X1[i]}</td>
                    <td>${data__X2[i]}</td>
                    <td>${data__Y[i]}</td>
                </tr>`
            ;
        }
        no++;
    }

    temp += `
        <tr>
            <td class="total"><b>Total</b></td>
            <td class="total"><b>${tX1}</b></td>
            <td class="total"><b>${tX2}</b></td>
            <td class="total"><b>${tY}</b></td>
        </tr>
    `;

    display.innerHTML = temp;