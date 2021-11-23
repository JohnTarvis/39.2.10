const App = () => {
    return <div>
        <Tweet username='bob123' name='bob' date='yesterday' message='hello'/>
        <Tweet username='Tom123' name='tom' date='today' message='hi'/>
        <Tweet username='John123' name='john' date='tomorrow' message='lo'/>
    </div>
}

ReactDOM.render(<App/>,document.getElementById('root'));