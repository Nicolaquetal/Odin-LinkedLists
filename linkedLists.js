const nodeFactory = (value = null,linkToNextNode =null)=>{

    return {value, linkToNextNode}
}

const LinkedList = ()=>{
    let FirstNode=null;
    let size =0;

    const append =(value)=> {
        let NewNode = nodeFactory(value)
        if (FirstNode== null ) {FirstNode=NewNode}
        else{
            let NextNode=FirstNode
            while(NextNode.linkToNextNode !=null){ 
                NextNode = NextNode.linkToNextNode
            }
            NextNode.linkToNextNode = NewNode
        }
        size+=1 
    }
    const prepend = (value) =>{
        let NewNode = nodeFactory(value)
        if (FirstNode== null ) {FirstNode=NewNode}
        else{
            NewNode.linkToNextNode = FirstNode
            FirstNode=NewNode
        }
        size+=1
    }
    const getSize =()  => {return size}
    const getHead = () =>{return FirstNode}

    const toString =() => {
        let result = "null"
        if(FirstNode != null){
            result = ""
            let NextNode=FirstNode
            while(NextNode.linkToNextNode !=null){ 
                result +="( " + NextNode.value + " ) -> "
                NextNode = NextNode.linkToNextNode
            }
            result += "( " + NextNode.value + " ) -> null"

        }
        return result
    }

    return {append, prepend, getSize,getHead,toString }

}

let testlist = LinkedList()

testlist.append(5)
testlist.append(10)
testlist.append(15)
testlist.prepend(6)
a = testlist.toString()
console.log(a)
