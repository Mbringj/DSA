class Node:
#constructor
  def __init__(self, data = None, next = None):
    self.data = data
    self.next = next
  #method for setting the data field of the node
  def setData(self,data):
    self.data = data
  #method for getting the data field of the node
  def getData(self):
    return self.data
  #method for setting the next field of the node
  def setNext(self,next):
    self.next = next
  #method for getting the next field of the node
  def getNext(self):
    return self.next
  #returns true if the node points to another node
  def hasNext(self):
    return self.next != None
  # class for defining a linked list

class LinkedList(object):
# initializing a list
  def __init__(self, node = None):
    self.length = 0
    self.head = node
  def lengths(self):
    current = self.head
    count = 0
    while current != None:
      count = count + 1
      current = current.next
    return count
  
  def insertAtBeg(self, data):
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
    newNode.data = data
    current = self.head
    while current.next != None:
      current = current.next

    current.next = newNode
    self.length += 1

  def insertAtGivenPosition(self, pos, data):
    if pos > self.length or pos < 0:
      return None
    else:
      if pos == 0:
        self.insertAtBeg(data)
      else:
        if pos == self.length:
          self.insertAtEnd(data)
        else:
          newNode = Node()
          newNode.data = data
          count = 1
          current = self.head
        while count < pos-1:
          count += 1
          current = current.next
        
        newNode.next = current.next
        current.next = newNode
        self.length += 1
  


lists = LinkedList(Node)

lists.insertAtBeg(44)
lists.insertAtBeg(42)
lists.insertAtBeg(43)
lists.insertAtBeg(41)

print(lists.lengths())