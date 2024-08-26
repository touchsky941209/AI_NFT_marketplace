//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTMarketplace is ERC721URIStorage {

    address private constant NYNYC_TOKEN = 0x3e1533C3a56e1F0214c0Be902e277f2dE097035f;

    //_tokenIds variable has the most recent minted tokenId
    uint256 private _tokenIds;
    //owner is the contract address that created the smart contract
    address payable owner;

    IERC20 private NYNYC_Token = IERC20(NYNYC_TOKEN);

    constructor() ERC721("NYNYCAINFT", "NYNYCNFT") {
        owner = payable(msg.sender);
    }

    function getCurrentToken() public view returns (uint256) {
        return _tokenIds;
    }

    event CreateToken(address indexed creator, uint counter, string message);

    function getAllowance() public view returns (uint256) {
        return NYNYC_Token.allowance(address(this), address(this));
    }

    //The first time a token is created, it is listed here
    function createToken(string[] memory tokenURI, uint256 amount) public {
        uint256 newTokenId = _tokenIds;
        
        NYNYC_Token.transferFrom(msg.sender, 0x5BDf77ffD472661962a4C2A745f8E8e33E888950, amount);
        for (uint256 i = 0; i < tokenURI.length; i++) {
            
            //Increment the tokenId counter, which is keeping track of the number of minted NFTs
            newTokenId += 1;
            
            //Mint the NFT with tokenId newTokenId to the address who called createToken
            _safeMint(msg.sender, newTokenId);
            
            //Map the tokenId to the tokenURI (which is an IPFS URL with the NFT metadata)
            _setTokenURI(newTokenId, tokenURI[i]);
        }
        
        _tokenIds = newTokenId;
        emit CreateToken(msg.sender, tokenURI.length, "Minted successfully.");

    }

}