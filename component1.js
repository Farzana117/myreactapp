import React,{component} from 'react';
import styles from './component1.module.css';

class Count extends React.Component{
	state={
		msg1:'',
		msg2:'',
		msg3:'',
		msg4:'',
		msg5:'',
		msg6:'',
		mmsg1:'',
		mmsg2:'',
		mmsg3:'',
		mmsg4:'',
		mmsg5:'',
		mmsg6:'',
		count1:3,
		count2:3,
		count3:3,
		count4:3,
		count5:3,
		count6:3
	};
	add1=()=>{
		this.setState({count1:this.state.count1+1});
	}
	add2=()=>{
		this.setState({count2:this.state.count2+1});
	}
	add3=()=>{
		this.setState({count3:this.state.count3+1});
	}
	add4=()=>{
		this.setState({count4:this.state.count4+1});
	}
	add5=()=>{
		this.setState({count5:this.state.count5+1});
	}
	add6=()=>{
		this.setState({count6:this.state.count6+1});
	}
	acpt1=()=>{
		this.setState({msg1:'Accepted',mmsg1:''});
	}
	rjct1=()=>{
		this.setState({msg1:'',mmsg1:'Rejected'});
	}
	acpt2=()=>{
		this.setState({msg2:'Accepted',mmsg2:''});
	}
	rjct2=()=>{
		this.setState({mmsg2:'Rejected',msg2:''});
	}
	acpt3=()=>{
		this.setState({msg3:'Accepted',mmsg3:''});
	}
	rjct3=()=>{
		this.setState({mmsg3:'Rejected',msg3:''});
	}
	acpt4=()=>{
		this.setState({msg4:'Accepted',mmsg4:''});
	}
	rjct4=()=>{
		this.setState({mmsg4:'Rejected',msg4:''});
	}
	acpt5=()=>{
		this.setState({msg5:'Accepted',mmsg5:''});
	}
	rjct5=()=>{
		this.setState({mmsg5:'Rejected',msg5:''});
	}
	acpt6=()=>{
		this.setState({msg6:'Accepted',mmsg6:''});
	}
	rjct6=()=>{
		this.setState({mmsg6:'Rejected',msg6:''});
	}
	render(){
		return(
<table>	
<tr>
<td colspan="5">
<a href="#" className={styles.hov}><i className="fas fa-bars" style={{color:'black',height:'20px',width:'30px',fontSize:'20px'}}></i></a>
		<span className={styles.s1}><b>LOGO</b></span>
		<a href="#" className={styles.hov}><i className="fas fa-envelope" style={{color:'black',height:'20px',width:'50px',fontSize:'20px'}}></i></a>
		<a href="#" className={styles.hov}><i className="fas fa-users" style={{color:'black',height:'20px',width:'50px',fontSize:'20px'}}></i></a>
		<span className={styles.s2}></span>
		<a href="#"><i class="fas fa-user-circle" style={{color:'black',height:'20px',width:'20px',padding:'5px',fontSize:'20px'}}></i></a>
		<span><b>User Name</b></span>
		<a href="#" className={styles.hov}><i class="fas fa-caret-down" style={{color:'black',width:'20px',padding:'5px',fontSize:'30px',fontSize:'20px'}}></i></a>
</td>
</tr>

<tr>
<td rowspan="2" style={{paddingTop:'0px',margin:'15px'}}>
<div className={styles.n1}>
Navigation<br/><br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px'}}></i><span>Dashboard</span></a>
		<br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px',paddingTop:'5px'}}></i><span>Candidates</span></a><br/><br/>
		<hr className={styles.hhh}/>
		Jobs<br/><br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px'}}></i><span>Live Jobs</span></a>
		<br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px',paddingTop:'5px'}}></i><span>Accepted Jobs</span></a>
		<br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px',paddingTop:'5px'}}></i><span>Rejected Jobs</span></a><br/><br/>
		<hr className={styles.hhh}/>
		Support<br/><br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px'}}></i><span>Help Desk</span></a>
		<br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px',paddingTop:'5px'}}></i><span>Tutorial</span></a>
		<br/>
		<a href="#" className={styles.hov}><i class="far fa-image" style={{color:'black',width:'20px',height:'10px',paddingRight:'10px',fontSize:'20px',paddingTop:'5px'}}></i><span>Feedback</span></a>
</div>
</td>
<td className={styles.tdd}>
<i class="far fa-image" style={{color:'black',width:'20px',height:'10px',fontSize:'35px',paddingTop:'1px'}}></i><br/>
		<b>Job Title</b><br/>
		Company Name, Department<br/>
		Location<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-id-card" style={{paddingRight:'5px',paddingTop:'5px'}}></i>123453
		<i class="fas fa-briefcase" style={{paddingLeft:'50px',paddingRight:'5px',paddingTop:'5px'}}></i>7-10 yrs<br/>
		<i class="far fa-calendar" style={{paddingRight:'5px',paddingTop:'5px'}}></i>Full Time
		<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-user" style={{paddingRight:'3px',paddingTop:'5px'}}></i>
		<span>{this.state.count1}</span> candidates
		<i class="far fa-money-bill-alt" style={{paddingTop:'5px',paddingLeft:'20px',paddingRight:'4px'}}></i>23-25 lakhs
		<br/>
		<button onClick={this.add1} style={{backgroundColor:'black',border:'2px solid white',height:'30px',width:'140px',color:'white',marginTop:'20px'}}>Add candidates</button>
		<button className={styles.btn1} onClick={this.acpt1}>Accept</button>
		<button className={styles.btn2} onClick={this.rjct1}>Reject</button><br/>
		<p style={{textAlign:'center',color:'green'}}>{this.state.msg1}</p>
		<p style={{textAlign:'center',color:'red'}}>{this.state.mmsg1}</p>
		
</td>
<td className={styles.tdd}>
<i class="far fa-image" style={{color:'black',width:'20px',height:'10px',fontSize:'35px',paddingTop:'1px'}}></i><br/>
		<b>Job Title</b><br/>
		Company Name, Department<br/>
		Location<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-id-card" style={{paddingRight:'5px',paddingTop:'5px'}}></i>123453
		<i class="fas fa-briefcase" style={{paddingLeft:'50px',paddingRight:'5px',paddingTop:'5px'}}></i>7-10 yrs<br/>
		<i class="far fa-calendar" style={{paddingRight:'5px',paddingTop:'5px'}}></i>Full Time
		<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-user" style={{paddingRight:'3px',paddingTop:'5px'}}></i>
		<span>{this.state.count2}</span> candidates
		<i class="far fa-money-bill-alt" style={{paddingTop:'5px',paddingLeft:'20px',paddingRight:'4px'}}></i>23-25 lakhs
		<br/>
		<button onClick={this.add2} style={{backgroundColor:'black',border:'2px solid white',height:'30px',width:'140px',color:'white',marginTop:'20px'}}>Add candidates</button>
		<button className={styles.btn1} onClick={this.acpt2}>Accept</button>
		<button className={styles.btn2} onClick={this.rjct2}>Reject</button><br/>
		<p style={{textAlign:'center',color:'green'}}>{this.state.msg2}</p>
		<p style={{textAlign:'center',color:'red'}}>{this.state.mmsg2}</p>
		
</td>
<td className={styles.tdd}>
<i class="far fa-image" style={{color:'black',width:'20px',height:'10px',fontSize:'35px',paddingTop:'1px'}}></i><br/>
		<b>Job Title</b><br/>
		Company Name, Department<br/>
		Location<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-id-card" style={{paddingRight:'5px',paddingTop:'5px'}}></i>123453
		<i class="fas fa-briefcase" style={{paddingLeft:'50px',paddingRight:'5px',paddingTop:'5px'}}></i>7-10 yrs<br/>
		<i class="far fa-calendar" style={{paddingRight:'5px',paddingTop:'5px'}}></i>Full Time
		<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-user" style={{paddingRight:'3px',paddingTop:'5px'}}></i>
		<span>{this.state.count3}</span> candidates
		<i class="far fa-money-bill-alt" style={{paddingTop:'5px',paddingLeft:'20px',paddingRight:'4px'}}></i>23-25 lakhs
		<br/>
		<button onClick={this.add3} style={{backgroundColor:'black',border:'2px solid white',height:'30px',width:'140px',color:'white',marginTop:'20px'}}>Add candidates</button>
		<button className={styles.btn1} onClick={this.acpt3}>Accept</button>
		<button className={styles.btn2} onClick={this.rjct3}>Reject</button><br/>
		<p style={{textAlign:'center',color:'green'}}>{this.state.msg3}</p>
		<p style={{textAlign:'center',color:'red'}}>{this.state.mmsg3}</p>
		
</td>
<td rowspan="2" style={{paddingTop:'0px',margin:'15px'}}>
<div className={styles.n2}>
<a href="#" className={styles.hov}><i class="fas fa-search" style={{padding:'7px',fontSize:'25px',marginTop:'5px'}}></i></a><br/><br/>
<a href="#" className={styles.hov}><i class="fas fa-filter" style={{padding:'7px',fontSize:'25px'}}></i></a><br/><br/>
<a href="#" className={styles.hov}><i class="fas fa-sort" style={{padding:'7px',fontSize:'30px',paddingBottom:'500px'}}></i></a>
<a href="#" className={styles.hov}><i class="fas fa-chevron-left" style={{padding:'7px',fontSize:'30px'}}></i></a>
</div>
</td>
</tr>
<tr>
<td className={styles.tdd}>
<i class="far fa-image" style={{color:'black',width:'20px',height:'10px',fontSize:'35px',paddingTop:'1px'}}></i><br/>
		<b>Job Title</b><br/>
		Company Name, Department<br/>
		Location<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-id-card" style={{paddingRight:'5px',paddingTop:'5px'}}></i>123453
		<i class="fas fa-briefcase" style={{paddingLeft:'50px',paddingRight:'5px',paddingTop:'5px'}}></i>7-10 yrs<br/>
		<i class="far fa-calendar" style={{paddingRight:'5px',paddingTop:'5px'}}></i>Full Time
		<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-user" style={{paddingRight:'3px',paddingTop:'5px'}}></i>
		<span>{this.state.count4}</span> candidates
		<i class="far fa-money-bill-alt" style={{paddingTop:'5px',paddingLeft:'20px',paddingRight:'4px'}}></i>23-25 lakhs
		<br/>
		<button onClick={this.add4} style={{backgroundColor:'black',border:'2px solid white',height:'30px',width:'140px',color:'white',marginTop:'20px'}}>Add candidates</button>
		<button className={styles.btn1} onClick={this.acpt4}>Accept</button>
		<button className={styles.btn2} onClick={this.rjct4}>Reject</button><br/>
		<p style={{textAlign:'center',color:'green'}}>{this.state.msg4}</p>
		<p style={{textAlign:'center',color:'red'}}>{this.state.mmsg4}</p>		
		</td>
<td className={styles.tdd}>
<i class="far fa-image" style={{color:'black',width:'20px',height:'10px',fontSize:'35px',paddingTop:'1px'}}></i><br/>
		<b>Job Title</b><br/>
		Company Name, Department<br/>
		Location<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-id-card" style={{paddingRight:'5px',paddingTop:'5px'}}></i>123453
		<i class="fas fa-briefcase" style={{paddingLeft:'50px',paddingRight:'5px',paddingTop:'5px'}}></i>7-10 yrs<br/>
		<i class="far fa-calendar" style={{paddingRight:'5px',paddingTop:'5px'}}></i>Full Time
		<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-user" style={{paddingRight:'3px',paddingTop:'5px'}}></i>
		<span>{this.state.count5}</span> candidates
		<i class="far fa-money-bill-alt" style={{paddingTop:'5px',paddingLeft:'20px',paddingRight:'4px'}}></i>23-25 lakhs
		<br/>
		<button onClick={this.add5} style={{backgroundColor:'black',border:'2px solid white',height:'30px',width:'140px',color:'white',marginTop:'20px'}}>Add candidates</button>
		<button className={styles.btn1} onClick={this.acpt5}>Accept</button>
		<button className={styles.btn2} onClick={this.rjct5}>Reject</button><br/>
		<p style={{textAlign:'center',color:'green'}}>{this.state.msg5}</p>
		<p style={{textAlign:'center',color:'red'}}>{this.state.mmsg5}</p>		
</td>
<td className={styles.tdd}>
<i class="far fa-image" style={{color:'black',width:'20px',height:'10px',fontSize:'35px',paddingTop:'1px'}}></i><br/>
		<b>Job Title</b><br/>
		Company Name, Department<br/>
		Location<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-id-card" style={{paddingRight:'5px',paddingTop:'5px'}}></i>123453
		<i class="fas fa-briefcase" style={{paddingLeft:'50px',paddingRight:'5px',paddingTop:'5px'}}></i>7-10 yrs<br/>
		<i class="far fa-calendar" style={{paddingRight:'5px',paddingTop:'5px'}}></i>Full Time
		<br/>
		<hr className={styles.hh}/><br/>
		<i class="fas fa-user" style={{paddingRight:'3px',paddingTop:'5px'}}></i>
		<span>{this.state.count6}</span> candidates
		<i class="far fa-money-bill-alt" style={{paddingTop:'5px',paddingLeft:'20px',paddingRight:'4px'}}></i>23-25 lakhs
		<br/>
		<button onClick={this.add6} style={{backgroundColor:'black',border:'2px solid white',height:'30px',width:'140px',color:'white',marginTop:'20px'}}>Add candidates</button>
		<button className={styles.btn1} onClick={this.acpt6}>Accept</button>
		<button className={styles.btn2} onClick={this.rjct6}>Reject</button><br/>
		<p style={{textAlign:'center',color:'green'}}>{this.state.msg6}</p>
		<p style={{textAlign:'center',color:'red'}}>{this.state.mmsg6}</p>		
</td>
</tr>
		</table>
		);
	}
}
export default Count;