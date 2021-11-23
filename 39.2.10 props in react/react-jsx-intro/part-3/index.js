const App = () => {
    return <div>
        <Person age='10' name='bob' hobbies={['cooking','coding','doing laundry']}/>
        <Person age='18' name='jim' hobbies={['cooking','coding','doing laundry']}/>
        <Person age='21' name='bobasdfasdfasdfasdf' hobbies={['cooking','coding','doing laundry']}/>


    </div>
}

ReactDOM.render(<App/>,document.getElementById('root'));