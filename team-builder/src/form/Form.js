import React, { useState } from 'react'
import Members from './FormList';



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

    const onSubmit = evt => {
        evt.preventDefault()
        console.log(member)
    }
    const [memberList, setMemberList] = useState([])

    const addMember = () => {
        setMemberList([...memberList, {
            id: memberList.length,
            name: member.name,
            email: member.email,
            role: member.role

        }])

    }


    return (
        <>
            <form id='team-form' onSubmit={addMember}>
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
                <br />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={addMember}>Add Member</button>
            <ul>
                {memberList.map(member => (
                    <li key={member.id}>{memberList}</li>
                ))}
            </ul>
        </>

    )
}