__winc_id__ = '9920545368b24a06babf1b57cee44171'
__human_name__ = 'refactoring'


class Specialist():

    _specialist_list = []

    def __init__(self, name, profession):
        self._specialist_list.append(self)
        self.name = name
        self.profession = profession


class Homeowner():

    def __init__(self, name, address, needs):
        self.name = name
        self.address = address
        self.needs = needs

    def get_contracts(self):
        contracts = []
        for need in self.needs:
            for specialist in Specialist._specialist_list:
                if need == specialist.profession:
                    contracts.append(specialist.name)
        return contracts


alice = Specialist('Alice Aliceville', 'electrician')
bob = Specialist('Bob Bobsville', 'painter')
craig = Specialist('Craig Craigsville', 'plumber')
alfred = Homeowner('Alfred Alfredson', 'Alfredslane 123', ['painter', 'plumber'])
bert = Homeowner('Bert Bertson', 'Bertslane 321', ['plumber'])
candice = Homeowner('Clyde Clydeson', 'Clydeslane 312', ['electrician', 'painter'])


alfred_contracts = alfred.get_contracts()
bert_contracts = bert.get_contracts()
candice_contracts = candice.get_contracts()


print("Alfred's contracts:", alfred_contracts)
print("Bert's contracts:", bert_contracts)
print("Candice's contracts:", candice_contracts)
