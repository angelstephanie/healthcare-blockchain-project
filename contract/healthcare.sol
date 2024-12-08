// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Healthcare {

    struct MedicalProfessional {
        uint256 profId;
        string name;
        string position;
        uint256 experience;
        address addr;
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

    struct MedicalLicense {
        uint256 licenseId;
        uint256 profId;
        string licenseType;
        string issueDate;
        string expiryDate;
    }

    struct MedicalProvider {
        address addr;
        string providerName;
    }

    MedicalProfessional[] private professionals;
    MedicalPractice[] private practices;
    MedicalLicense[] private licenses;
    MedicalProvider[] private providers;

    address private owner;

    constructor(string memory providerName) {
        owner = msg.sender;
        providers.push(MedicalProvider(owner, providerName));
    }

    function isProfessionalAddressExist(address addr) public view returns (bool) {
        for (uint256 i = 0; i < professionals.length; i++) {
            if (professionals[i].addr == addr) {
                return true;
            }
        }
        return false;
    }

    function isProfIdExist(uint256 profId) private view returns (bool) {
        for (uint256 i = 0; i < professionals.length; i++) {
            if (professionals[i].profId == profId) {
                return true;
            }
        }
        return false;
    }

    function isLicenseIdExist(uint256 licenseId) private view returns (bool) {
        for (uint256 i = 0; i < licenses.length; i++) {
            if (licenses[i].licenseId == licenseId) {
                return true;
            }
        }
        return false;
    }

    function isPracticeIdExist(uint256 practiceId) private view returns (bool) {
        for (uint256 i = 0; i < practices.length; i++) {
            if (practices[i].practiceId == practiceId) {
                return true;
            }
        }
        return false;
    }

    function isProvider(address addr) public view returns (bool) {
        for (uint256 i = 0; i < providers.length; i++) {
            if (providers[i].addr == addr) {
                return true;
            }
        }
        return false;
    }

    function addMedicalProfessional(uint256 profId, string memory name, string memory position, uint256 experience, address addr) public {
        require(!isProfessionalAddressExist(addr), "Medical professional address already exists");
        require(!isProfIdExist(profId), "Medical professional ID already exists");
        professionals.push(MedicalProfessional(profId, name, position, experience, addr));
    }

    function addMedicalPractice(uint256 practiceId, string memory patientName, string memory diagnosis, string memory treatment, string memory date, uint256 profId, string memory providerName) public {
        require(isProvider(msg.sender), "Only medical providers can add medical practice");
        require(!isPracticeIdExist(practiceId), "Medical practice ID already exists");
        require(isProfIdExist(profId), "Medical professional ID does not exist");
        practices.push(MedicalPractice(practiceId, patientName, diagnosis, treatment, date, profId, providerName));
    }

    function addMedicalLicense(uint256 licenseId, uint256 profId, string memory licenseType, string memory issueDate, string memory expiryDate) public {
        require(isProvider(msg.sender), "Only medical providers can add medical license");
        require(!isLicenseIdExist(licenseId), "Medical license ID already exists");
        require(isProfIdExist(profId), "Medical professional ID does not exist");
        licenses.push(MedicalLicense(licenseId, profId, licenseType, issueDate, expiryDate));
    }

    function addMedicalProvider(address addr, string memory providerName) public {
        require(isProvider(msg.sender), "Only medical providers can add new provider");
        require(!isProvider(addr), "Medical provider already exists");
        providers.push(MedicalProvider(addr, providerName));
    }

    function getMedicalProfessionalByProfId(uint256 profId) public view returns (MedicalProfessional memory) {
        for (uint256 i = 0; i < professionals.length; i++) {
            if (professionals[i].profId == profId) {
                return professionals[i];
            }
        }
        revert("Medical professional not found");
    }

    function getMedicalPracticesByProfId(uint256 profId) public view returns (MedicalPractice[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < practices.length; i++) {
            if (practices[i].profId == profId) {
                count++;
            }
        }
        if(count == 0) {
            revert("No medical practices found for the given professional ID");
        }

        MedicalPractice[] memory result = new MedicalPractice[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < practices.length; i++) {
            if (practices[i].profId == profId) {
                result[index] = practices[i];
                index++;
            }
        }
        return result;
    }

    function getMedicalLicensesByProfId(uint256 profId) public view returns (MedicalLicense[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < licenses.length; i++) {
            if (licenses[i].profId == profId) {
                count++;
            }
        }
        if(count == 0) {
            revert("No medical licenses found for the given professional ID");
        }

        MedicalLicense[] memory result = new MedicalLicense[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < licenses.length; i++) {
            if (licenses[i].profId == profId) {
                result[index] = licenses[i];
                index++;
            }
        }
        return result;
    }

    function getMedicalProvider(address addr) public view returns (MedicalProvider memory) {
        for (uint256 i = 0; i < providers.length; i++) {
            if (providers[i].addr == addr) {
                return providers[i];
            }
        }
        revert("Medical provider not found");
    }

    function getAllMedicalProfessionals() public view returns (MedicalProfessional[] memory) {
        return professionals;
    }

    function getAllMedicalPractices() public view returns (MedicalPractice[] memory) {
        return practices;
    }

    function getAllMedicalLicenses() public view returns (MedicalLicense[] memory) {
        return licenses;
    }

    function getAllMedicalProviders() public view returns (MedicalProvider[] memory) {
        return providers;
    }
    
}
