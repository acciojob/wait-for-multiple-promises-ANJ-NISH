//your JS code here. If required.
let Promise1=new Promise((resolve,reject)=>
	{
		let s1=parseInt(((Math.random()*2+1))*1000);
		setTimeout(()=>
		
			resolve(["promise 1 resolved",s1]
                ),
				 s1)
	})

let Promise2=new Promise((resolve,reject)=>
	{
		let s2=parseInt(((Math.random()*2+1))*1000);
		setTimeout(()=>
           resolve(["promise 2 resolved",s2]),
				 s2)
	})

let Promise3=new Promise((resolve,reject)=>
	{
		let s3=parseInt(((Math.random()*2+1))*1000);
		setTimeout(()=>
           resolve(["promise 3 resolved",s3]),
				 s3)
        
	})


Promise.all([Promise1,Promise2,Promise3]).then((data)=>
	{
        let t1=new Date().getMilliseconds();
		let tb=document.getElementById('output');
		tb.innerHTML="";

		data.forEach((ele,index)=>
			{
					let r1=document.createElement('tr');
					let d1=document.createElement('td');
					let d2=document.createElement('td');

				    let seconds=parseInt(ele[1]/1000);

				d1.textContent=`Promise ${index+1}`;
				d2.textContent=`${seconds}`;

				r1.appendChild(d1);
				r1.appendChild(d2);
				tb.appendChild(r1);
			});

		let r1=document.createElement('tr');
		let d1=document.createElement('td');
		let d2=document.createElement('td');

        let t2=new Date().getMilliseconds();

		d1.textContent="Total";

        let ans=Math.max(data[0][1],data[1][1],data[2][1]); 

		d2.textContent = (ans/1000).toFixed(3);


		r1.appendChild(d1);
		r1.appendChild(d2);
		tb.appendChild(r1);
	}
	)



