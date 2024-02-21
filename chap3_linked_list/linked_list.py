# node definition
class Node:
  # constructor 
  def __init__(self, data=None, next=None):
    self.data = data
    self.next = next
  
  def setData(self, data):
    self.data = data

  def getData(self):
    return self.data
  
  def getNext(self):
    return self.next
  
  def setNext(self, next):
    self.next = next
  
  def hasNext(self):
    return self.next != None


class LinkedList(object):
  
  def __init__(self, node=None):
    self.length = 0
    self.head = node

  def lengths(self):
    curent  = self.head
    count = 0

    while curent != None:
      count = count + 1
      curent = curent.next
    return count

  def insertAtBegin(self, data):
    newNode = Node()
    newNode.data = data 

    if self.length == 0:
      self.head = newNode
    else:
      newNode.next = self.head
      self.head = newNode
    
    self.length += 1

  def insertAtEnd(self, data):
    newNode = Node()
    newNode.data

    curent = self.head
  
    while(curent != None):
      curent =  curent.next
    
    self.next = newNode
    self.length +=1

  def insertInPosition(self, pos, data):
    
    if(pos > self.length and pos > 0):
      return None
    else:
      if(pos==0):
        self.insertAtBegin(data)
      else:
        if(self.length == pos):
          self.insertAtEnd(data)
        else:

          newNode = Node()
          newNode.data = data
          count = 1
          current = self.head

          while(count < pos -1):
            count +=1
            current = current.next
          
          newNode.next = current.next
          current.next = newNode.next

          self.length +=1




lists = LinkedList(Node)

lists.insertAtBegin(2)
lists.insertAtEnd(3)
lists.insertAtEnd(4)
lists.insertAtEnd(6)

print(lists.lengths())







