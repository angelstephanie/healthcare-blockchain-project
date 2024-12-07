// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Healthcare {

    struct MedicalProfessional {
        uint256 profId;
        string name;
        string position;
        uint256 experience;
    }

    struct MedicalPractice {
        uint256 practiceId;
        string patientName;
        string diagnosis;
        string treatment;
        string date;
        uint256 profId;
        string providerName;
    }

    struct MedicalProvider {
        address addr;
        string providerName;
    }

    MedicalProfessional[] private professionals;
    MedicalPractice[] private practices;
    MedicalProvider[] private providers;

    address public owner;

    constructor(string memory providerName) {
        owner = msg.sender;
        providers.push(MedicalProvider(owner, providerName));
    }

    function isProvider(address addr) public view returns (bool) {
        for (uint256 i = 0; i < providers.length; i++) {
            if (providers[i].addr == addr) {
                return true;
            }
        }
        return false;
    }

    function addMedicalProfessional(uint256 profId, string memory name, string memory position, uint256 experience) public {
        require(isProvider(msg.sender), "Only medical providers can add a new provider");
        professionals.push(MedicalProfessional(profId, name, position, experience));
    }

    function addMedicalPractice(uint256 practiceId, string memory patientName, string memory diagnosis, string memory treatment, string memory date, uint256 profId, string memory providerName) public {
        require(isProvider(msg.sender), "Only medical providers can add a new provider");
        practices.push(MedicalPractice(practiceId, patientName, diagnosis, treatment, date, profId, providerName));
    }

    function addMedicalProvider(address addr, string memory providerName) public {
        require(isProvider(msg.sender), "Only medical providers can add a new provider");
        providers.push(MedicalProvider(addr, providerName));
    }

    function getAllMedicalProfessionals() public view returns (MedicalProfessional[] memory) {
        return professionals;
    }

    function getAllMedicalPractices() public view returns (MedicalPractice[] memory) {
        return practices;
    }

    function getAllMedicalProviders() public view returns (MedicalProvider[] memory) {
        return providers;
    }
    
}
