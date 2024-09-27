import React, { useState } from 'react'




export default function TeamForm() {


    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });
    const onChange = e => {
        setMember({
            ...member, [e.target.name]: e.target.value
        })

    }


    const [memberList, setMemberList] = useState([])

    const addMember = (e) => {

    }
    const onSubmit = evt => {
        evt.preventDefault()
        setMemberList([...memberList, {
            id: memberList.length,
            name: member.name,
            email: member.email,
            role: member.role
        }])
        
    }
console.log(memberList) 


    return (
        <>
            <form id='#team-form' onSubmit={onSubmit}>
                <label>Name
                   <input
                        value={member.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email
                    <input
                        value={member.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Role
                    <select
                        value={member.role}
                        onChange={onChange}
                        name='role'>
                        <option value=''>--select a role--</option>
                        <option value='backend engineer'>backend engineer</option>
                        <option value='frontend engineer'>frontend engineer</option>
                        <option value='designer'>designer</option>
                    </select>
                </label>
                <div className='submit'>
                <button>Submit</button>
                </div> 
                <button>Add Member</button>
            </form>
           
            <ul>
                {memberList.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </>

    )
}